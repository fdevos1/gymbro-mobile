import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Workout from './src/screens/workout';
import {ClickOutsideProvider} from 'react-native-click-outside';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ClickOutsideProvider>
        <Workout />
      </ClickOutsideProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
