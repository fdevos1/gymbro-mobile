import React from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {ISet} from '../types/Workout';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const WorkoutBoxRow = ({
  finishCurrentSet,
  setInfos,
}: {
  finishCurrentSet: any;
  setInfos: ISet;
}) => {
  const {isFinished, kg, number, reps} = setInfos;

  const translateX = useSharedValue(0);

  const {width} = Dimensions.get('window');

  const translateXThreshold = width * 0.3;

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const gesture = Gesture.Pan()
    .onUpdate(e => {
      translateX.value = e.translationX;
    })

    .onEnd(() => {
      if (translateX.value < -80 / 2) {
        translateX.value = withSpring(-80);
      }

      translateX.value = withSpring(0);
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          table.row,
          isFinished ? table.finishedRow : null,
          animatedStyles,
        ]}>
        <View style={[table.smallCol, styles.alignToCenter]}>
          <Text
            style={[
              styles.centeredText,
              styles.text,
              table.setNumber,
              isFinished ? null : styles.bgBorder,
            ]}>
            {number}
          </Text>
        </View>
        <Text style={[styles.text, table.bigCol, styles.centeredText]}>
          {kg && reps ? `${kg} kg x ${reps}` : ''}
        </Text>
        <View style={table.mediumCol}>
          <TextInput
            style={[
              styles.centeredText,
              styles.text,
              table.input,
              isFinished ? null : styles.bgBorder,
            ]}
            keyboardType="numeric"
          />
        </View>
        <View style={table.mediumCol}>
          <TextInput
            style={[
              styles.centeredText,
              styles.text,
              table.input,
              isFinished ? null : styles.bgBorder,
            ]}
            keyboardType="numeric"
          />
        </View>
        <View style={[table.smallCol, styles.endToRight]}>
          <TouchableHighlight
            onPress={finishCurrentSet}
            style={[
              styles.bgBorder,
              styles.buttonPadding,
              isFinished ? table.finishedCol : null,
            ]}>
            <Icon
              name="check"
              size={16}
              color={isFinished ? '#fff' : '#09090b'}
            />
          </TouchableHighlight>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

const table = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  bold: {
    fontSize: 16,
    fontWeight: '700',
    color: '#09090b',
  },
  options: {
    backgroundColor: '#e4e4e7',
    color: '#000',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 36,
    backgroundColor: '#fafaf9',
  },
  smallCol: {
    flex: 1,
  },
  mediumCol: {
    flex: 2,
  },
  bigCol: {
    flex: 3,
  },
  finishedRow: {
    backgroundColor: '#dcfce7',
  },
  finishedCol: {
    backgroundColor: '#22c55e',
  },
  input: {
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 0,
    borderWidth: 0,
  },
  activeInput: {
    borderWidth: 1,
  },
  setNumber: {
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fafaf9',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    padding: 2,
  },
  centeredText: {
    textAlign: 'center',
  },
  bgBorder: {
    backgroundColor: '#e4e4e7',
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  endToRight: {
    alignItems: 'center',
  },
  buttonPadding: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  alignToCenter: {
    alignItems: 'center',
  },
});

export default WorkoutBoxRow;
