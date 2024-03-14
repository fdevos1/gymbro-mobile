import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

function Dashboard() {
  return (
    <View style={{padding: 16, backgroundColor: '#fafaf9', gap: 80}}>
      <View style={{gap: 16}}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
          Inicio rápido
        </Text>

        <TouchableHighlight
          style={{
            backgroundColor: 'rgba(66,133,244, 0.75)',
            borderRadius: 4,
            padding: 4,
            width: '100%',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
            Começar novo treino
          </Text>
        </TouchableHighlight>
      </View>

      <View style={{width: '100%', height: 200}}>
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight
            style={{
              width: '80%',
              backgroundColor: 'rgba(66,133,244, 0.75)',
              alignItems: 'center',
              borderRadius: 4,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 4,
                alignItems: 'center',
                gap: 8,
              }}>
              <Text style={{fontSize: 16, fontWeight: '700', color: 'white'}}>
                Criar modelo novo
              </Text>
              <Icon name="plus" color="#fff" size={16} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

export default Dashboard;
