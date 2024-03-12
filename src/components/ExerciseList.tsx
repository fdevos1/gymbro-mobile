import React from 'react';

import {StyleSheet, View} from 'react-native';
import {useClickOutside} from 'react-native-click-outside';

import Searchbar from './Searchbar';

const ExerciseList = ({handleClose}: {handleClose: () => void}) => {
  const ref = useClickOutside<View>(() => handleClose());

  return (
    <View style={styles.container}>
      <View style={styles.box} ref={ref}>
        <View style={styles.header}>
          <Searchbar />
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
    padding: 12,
    gap: 8,
  },
  header: {
    width: '100%',
    height: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  list: {
    height: '100%',
  },
});

export default ExerciseList;
