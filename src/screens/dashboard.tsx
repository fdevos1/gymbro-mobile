import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import ScreenLayout from '../components/ScreenLayout';

function Dashboard() {
  return (
    <ScreenLayout>
      <View style={{backgroundColor: 'blue'}}>
        <View style={{backgroundColor: 'red', gap: 8}}>
          <Text>Hello World</Text>

          <TouchableHighlight
            style={{
              backgroundColor: 'blue',
              borderWidth: 1,
              borderRadius: 4,
              padding: 4,
              width: '100%',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: '700'}}>
              Começar novo treino
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScreenLayout>
  );
}

export default Dashboard;
