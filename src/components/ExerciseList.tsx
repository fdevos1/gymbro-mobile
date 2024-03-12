import React from 'react';

import {StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const ExerciseList = ({handleClose}: {handleClose: () => void}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header}>
          <View>
            <View>{/* SEARCH BAR */}</View>
            <Icon name="close" onPress={handleClose} />
          </View>
        </View>
        <View style={styles.list}>{/* LISTA DE EXERCICIO */}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(28,28,28,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '80%',
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 4,
    gap: 8,
  },
  header: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    gap: 4,
  },
  list: {
    height: '100%',
  },
});

export default ExerciseList;
