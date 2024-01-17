import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Dimensions,
} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import PlusIcon from 'react-native-vector-icons/FontAwesome';
import OptionIcon from 'react-native-vector-icons/SimpleLineIcons';

import WorkoutBoxRow from './WorkoutBoxRow';

import {ISet} from '../types/Workout';

const WorkoutBox = () => {
  const [numOfSets, setNumOfSets] = useState<ISet[]>([
    {
      number: 1,
      kg: null,
      reps: null,
      isFinished: false,
    },
  ]);

  const addNewSet = () => {
    const lastAddedSet = numOfSets[numOfSets.length - 1];
    const newSet = {
      number: lastAddedSet.number + 1,
      kg: null,
      reps: null,
      isFinished: false,
    };

    setNumOfSets([...numOfSets, newSet]);
  };

  const finishCurrentSet = (setNumber: number) => {
    setNumOfSets(state => {
      console.log(state);
      return [];
    });

    console.log(setNumber);

    return;
  };

  // const {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* Título do exercicio e Opções */}

      <View style={table.header}>
        <Text style={table.bold}>Título</Text>

        <TouchableHighlight>
          <View style={table.options}>
            <OptionIcon name="options" />
          </View>
        </TouchableHighlight>
      </View>

      {/*
        Título da caixa
        Conter:
        - Sets
        - Peso Anterior (x kg * reps)
        - Peso Atual
        - Reps
        */}

      <View style={table.row}>
        <Text style={[table.bold, table.smallCol, styles.centeredText]}>
          Set
        </Text>
        <Text style={[table.bold, table.bigCol, styles.centeredText]}>
          Anterior
        </Text>
        <Text style={[table.bold, table.mediumCol, styles.centeredText]}>
          Kg
        </Text>
        <Text style={[table.bold, table.mediumCol, styles.centeredText]}>
          Reps
        </Text>
        <View style={table.smallCol} />
      </View>

      {/*
      Corpo da caixa
      Conter:
      - Número do set atual (aumentando automaticamente)
      - Visualização do último treino em que esse set foi feito
      - Input para inserir o peso levantado no set
      - Input para reps
      */}
      <GestureHandlerRootView>
        {numOfSets.map((item, i) => (
          <View key={i} style={styles.justifyCenter}>
            <View style={styles.deleteIcon}>
              <Text style={styles.deleteText}>Excluir</Text>
            </View>

            <WorkoutBoxRow
              setInfos={item}
              finishCurrentSet={finishCurrentSet}
            />
          </View>
        ))}
      </GestureHandlerRootView>

      {/* Botão para adicionar uma série ao exercicio selecionado */}
      <TouchableOpacity
        style={[styles.button, styles.bgBorder]}
        onPress={addNewSet}>
        <PlusIcon name="plus" color="#000" />
        <Text style={styles.text}>Adicionar série</Text>
      </TouchableOpacity>
    </View>
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
  justifyCenter: {
    justifyContent: 'center',
  },
  deleteIcon: {
    height: 30,
    right: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 4,
    backgroundColor: '#dc2626',
  },
  deleteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default WorkoutBox;
