import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';

import {ISet} from '../../types/Workout';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#fafaf9',
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },

  bgBorder: {
    backgroundColor: '#e4e4e7',
    borderRadius: 4,
  },

  input: {
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 0,
    borderWidth: 0,
  },

  centeredText: {
    textAlign: 'center',
  },
});

const WorkoutSetLayout = ({
  item: {number, isFinished, kg, reps},
  style,
}: {
  item: ISet;
  style: any;
}) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <View style={{flex: 1}}>
        <Text
          style={[
            styles.text,
            styles.centeredText,
            isFinished ? null : styles.bgBorder,
            {paddingHorizontal: 12, paddingVertical: 2},
          ]}>
          {number}
        </Text>
      </View>
      <View style={{flex: 3}}>
        <Text>{kg && reps ? `${kg} kg x ${reps}` : ''}</Text>
      </View>
      <View style={{flex: 2}}>
        <TextInput
          style={[
            styles.input,
            styles.text,
            styles.centeredText,
            isFinished ? null : styles.bgBorder,
          ]}
        />
      </View>
      <View style={{flex: 2}}>
        <TextInput
          style={[
            styles.input,
            styles.text,
            styles.centeredText,
            isFinished ? null : styles.bgBorder,
          ]}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableHighlight
          style={[
            styles.bgBorder,
            {paddingVertical: 4, paddingHorizontal: 8},
            isFinished
              ? {
                  backgroundColor: '#22c55e',
                }
              : null,
          ]}>
          <Icon
            name="check"
            size={16}
            color={isFinished ? '#fff' : '#09090b'}
          />
        </TouchableHighlight>
      </View>
    </Animated.View>
  );
};

export default WorkoutSetLayout;
