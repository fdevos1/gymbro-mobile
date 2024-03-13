import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {ClickOutsideProvider} from 'react-native-click-outside';
import Navigator from './src/components/Navigator';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    width: '100%',
    backgroundColor: '#ccc',
  },
});

export default App;
