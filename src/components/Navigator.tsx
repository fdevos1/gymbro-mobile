import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Dashboard from '../screens/dashboard';
import {View} from 'react-native';

const Navigator = () => {
  const Tab = createBottomTabNavigator();

  const tabs = [
    {
      name: 'Perfil',
      component: () => <View></View>,
      icon: ({color, size}: {color: string; size: number}) => (
        <IonIcon name="person" color={color} size={size} />
      ),
    },
    {
      name: 'Histórico',
      component: () => <View></View>,
      icon: ({color, size}: {color: string; size: number}) => (
        <Icon name="calendar-o" color={color} size={size} />
      ),
    },
    {
      name: 'Treino',
      component: Dashboard,
      icon: ({color, size}: {color: string; size: number}) => (
        <Icon name="plus" color={color} size={size} />
      ),
    },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: 'grey'},
          tabBarActiveTintColor: 'white',
        }}>
        {tabs.map(route => (
          <Tab.Screen
            name={route.name}
            component={route.component}
            options={{
              tabBarIcon: ({color, size}) => route.icon({color, size}),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
