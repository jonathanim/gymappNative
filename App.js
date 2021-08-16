import React from 'react'

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import DT from './darkTheme'
import myDarkTheme from './darkTheme'
import WelcomePage from './components/WelcomePage'
import Stopwatch from './components/Stopwatch'
import Tracker from './components/Tracker'
import Tutorials from './components/Tutorials'
import Calculator from './components/Calculator'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator()




function TabNavigation({ navigation }) {
  return (
    <Tab.Navigator initialRouteName='Welcome' screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = focused ? 'ios-home'
              : 'ios-home-outline'
          }
          else if (route.name === 'Stopwatch') {
            iconName = focused ? 'stopwatch' : 'stopwatch-outline';
          } else if (route.name === 'Tracker') {
            iconName = focused ? 'list' : 'list-outline';
          }
          else if (route.name === 'BMI') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          }
          else if (route.name === 'Videos') {
            iconName = focused ? 'videocam' : 'videocam-outline';
          }
          return <Ionicons name={iconName} size={size} color={'#f75990'} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }

      )

    }>

      <Tab.Screen name='Welcome' component={WelcomePage} />
      <Tab.Screen name='Stopwatch' component={Stopwatch} />
      <Tab.Screen name="Tracker" component={Tracker} />
      <Tab.Screen name="Videos" component={Tutorials} />
      <Tab.Screen name="BMI" component={Calculator} />
    </Tab.Navigator >

  )
}



function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <TabNavigation />
    </NavigationContainer>
  )
}

export default App
