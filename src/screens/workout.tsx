import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WorkoutBox from '../components/workoutSession/WorkoutBox';

function Workout() {
  return (
    <View style={styles.container}>
      <WorkoutBox />
      <View style={styles.box}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    gap: 24,
  },
  box: {
    width: '80%',
    backgroundColor: '#fafaf9',
  },
  title: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-around',
  },
  titleText: {
    fontWeight: '800',
    color: '#000',
    textTransform: 'uppercase',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    color: '#fff',
  },
});

export default Workout;
