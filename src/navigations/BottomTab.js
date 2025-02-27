import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as ui from '../screens'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SCREEN } from '../enums'
import { SVG } from '../assets'
import { COLORS } from '../enums/StyleGuide'

const BottomTab = () => {
  const TAB = createBottomTabNavigator()
  return (
<TAB.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
        },
        tabBarActiveTintColor: '#FFFFFFBF',
        tabBarInactiveTintColor: '#FFFFFF40',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <TAB.Screen
        name="Home"
        component={ui.HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SVG.selectedHome /> : <SVG.unSelectedHome />,
        }}
      />
      <TAB.Screen
        name="Search"
        component={ui.SearchScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SVG.selectedSearch /> : <SVG.unSelectedSearch />,
        }}
      />
      <TAB.Screen
        name="Library"
        component={ui.LibraryScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SVG.selectedLibrary /> : <SVG.unSelectedLibrary />,
        }}
      />
    </TAB.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})