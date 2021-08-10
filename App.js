import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './components/Home';
import Stopwatch from './components/TimerComponents/Stopwatch';
import Countdown from './components/Countdown';
import Tracker from './components/Tracker';
import Videos from './components/Videos';




export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={Home} screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline'

          }
          else if (route.name === 'Stopwatch') {
            iconName = focused ? 'stopwatch' : 'stopwatch-outline';
          } else if (route.name === 'Tracker') {
            iconName = focused ? 'list' : 'list-outline';
          }
          else if (route.name === 'Countdown') {
            iconName = focused ? 'timer' : 'timer-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={'#f75990'} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })} >
        <Tab.Screen
          name="Home"
          component={Home} />
        <Tab.Screen
          name="Tracker"
          component={Tracker} />
        <Tab.Screen
          name="Videos"
          component={Videos} />
        <Tab.Screen
          name="Stopwatch"
          component={Stopwatch} />
        <Tab.Screen
          name="Countdown"
          component={Countdown} />

      </Tab.Navigator>
    </NavigationContainer >
  );
}

