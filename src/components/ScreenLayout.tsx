import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ScreenLayout = ({children}: {children: JSX.Element}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{color: 'black', fontWeight: '700', fontSize: 20}}>
            nome do local
          </Text>
        </View>
        <View>{children}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fafaf9',
    padding: 16,
    justifyContent: 'space-between',
  },
  header: {
    height: 40,
    backgroundColor: 'red',
  },
});

export default ScreenLayout;
