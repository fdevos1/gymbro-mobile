import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = SCREEN_HEIGHT / 1.5;

function Dashboard() {
  const translateY = useSharedValue(0);
  const reanimatedBottomStyle = useAnimatedStyle(e => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <Animated.View style={[styles.container, reanimatedBottomStyle]}>
      <View style={styles.header}>
        <Text style={styles.quickStartText}>Inicio rápido</Text>

        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Começar novo treino</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.body}>
        <TouchableHighlight style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Criar novo modelo</Text>
          </View>
        </TouchableHighlight>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,

    padding: 16,
    gap: 80,
    position: 'absolute',

    top: SCREEN_HEIGHT / 1.5,
    zIndex: 12000,
  },
  header: {
    gap: 16,
  },
  quickStartText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  button: {
    backgroundColor: 'rgba(66,133,244, 0.75)',
    alignItems: 'center',
    borderRadius: 4,
    padding: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  body: {
    width: '100%',
    height: 200,
    paddingHorizontal: 16,
  },
});

export default Dashboard;
