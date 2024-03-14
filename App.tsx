import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';

import {ClickOutsideProvider} from 'react-native-click-outside';
import Navigator from './src/components/Navigator';

const DEVICE_WIDTH = Dimensions.get('screen').width;

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ClickOutsideProvider>
        <Navigator />
      </ClickOutsideProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    width: DEVICE_WIDTH,
    backgroundColor: '#ccc',
  },
});

export default App;
