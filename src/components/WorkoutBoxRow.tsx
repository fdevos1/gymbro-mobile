import React from 'react';

import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';

import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {FlatList, Gesture, GestureDetector} from 'react-native-gesture-handler';

import {ISet} from '../types/Workout';

import WorkoutSetLayout from './WorkoutSetLayout';

interface WorkoutBoxRowProps {
  item: ISet | ISet[];
  handleRemove: (id: number) => void;
}

const ITEM_HEIGHT = 40;
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const DELETE_BUTTON_WIDTH = DEVICE_WIDTH * 0.3;
const SWIPE_THRESHOLD = DELETE_BUTTON_WIDTH;

const WorkoutBoxRow = ({item, handleRemove}: WorkoutBoxRowProps) => {
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

  const transX = useSharedValue(0);
  const viewHeight = useSharedValue(ITEM_HEIGHT);

  const gesture = Gesture.Pan()
    .onBegin(e => {
      e.translationX = transX.value;
    })
    .onUpdate(e => {
      if (-transX.value > SWIPE_THRESHOLD) {
        const temp = e.translationX * 0.005 + transX.value;
        transX.value = withTiming(temp, {duration: 0});
      }
      transX.value = e.translationX;
    })
    .onEnd(e => {
      if (e.translationX < SWIPE_THRESHOLD / 2) {
        transX.value = withTiming(0, {duration: 300, easing: Easing.quad});
      }

      transX.value = withTiming(-SWIPE_THRESHOLD, {
        duration: 300,
        easing: Easing.quad,
      });
    });

  const rInnerContainer = useAnimatedStyle(() => {
    return {
      transform: [{translateX: transX.value}],
    };
  }, [transX.value]);

  const rTextContainer = useAnimatedStyle(() => {
    return {
      width: -transX.value,
    };
  }, [transX.value]);

  const rDeleteViewStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      -transX.value,
      [0, DELETE_BUTTON_WIDTH * 0.6, DELETE_BUTTON_WIDTH],
      [1, 0.8, 1.2],
      Extrapolation.CLAMP,
    );

    return {
      width: -transX.value,
      height: '100%',
      transform: [{scale}],
    };
  }, [transX.value]);

  const rRemove = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        -transX.value,
        [
          0,
          DELETE_BUTTON_WIDTH * 0.8,
          DELETE_BUTTON_WIDTH,
          DELETE_BUTTON_WIDTH * 1.5,
          DELETE_BUTTON_WIDTH * 2.0,
        ],
        [0, 0, 1, 1, 0],
        Extrapolation.CLAMP,
      ),
    };
  }, [transX.value]);

  const rRemoving = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        -transX.value,
        [DELETE_BUTTON_WIDTH * 1.5, DELETE_BUTTON_WIDTH * 2.0],
        [0, 1],
        Extrapolation.CLAMP,
      ),
    };
  }, [transX.value]);

  const rDeleteContainer = useAnimatedStyle(() => {
    return {
      height: withTiming(viewHeight.value, {duration: 300}, () => {
        if (viewHeight.value === 0) {
          handleRemove && runOnJS(handleRemove)(item.id);
        }
      }),
      opacity: withTiming(viewHeight.value === 0 ? 0 : 1, {duration: 300}),
    };
  }, [viewHeight.value]);

  return (
    <Animated.View style={[styles.container, rDeleteContainer]}>
      <View style={styles.deleteContainer}>
        <Animated.View style={[styles.deleteInnerContainer, rDeleteViewStyles]}>
          <AnimatedTouchableOpacity
            style={[styles.textContainer, rTextContainer]}>
            <Animated.Text style={[styles.remove, rRemove]}>
              Remover
            </Animated.Text>
            <Animated.Text style={[styles.remove, rRemoving]}>
              Removendo
            </Animated.Text>
          </AnimatedTouchableOpacity>
        </Animated.View>
      </View>
      <GestureDetector gesture={gesture}>
        <FlatList
          data={item}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </GestureDetector>
    </Animated.View>
  );

  function renderItem({item}: {item: ISet}) {
    return (
      <WorkoutSetLayout
        item={item}
        style={rInnerContainer}
        handleRemove={handleRemove(item.id)}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    height: ITEM_HEIGHT,
  },
  deleteContainer: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
    width: DELETE_BUTTON_WIDTH,
  },
  textContainer: {
    height: ITEM_HEIGHT,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  remove: {
    position: 'absolute',
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  deleteInnerContainer: {
    position: 'absolute',
    backgroundColor: '#ff5050',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WorkoutBoxRow;
