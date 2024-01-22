import React from 'react';
import {View} from 'react-native';

import Animated from 'react-native-reanimated';

interface DeleteSetRow {
  x: Animated.Node<number>;
  deleteOpacity: Animated.Node<number>;
}

const DeleteSetRow = ({x, deleteOpacity}: DeleteSetRow) => {
  const size = cond();

  return (
    <View
      style={{
        width: 80,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.Text style={[Style, {color: '#fff', fontWeight: '600'}]}>
        Delete
      </Animated.Text>
    </View>
  );
};

export default DeleteSetRow;
