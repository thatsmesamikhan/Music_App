import React from 'react'
import * as ui from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { SCREEN } from '../enums'

const RootNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name={SCREEN.REGISTER_SCREEN} component={ui.RegisterScreen}/>
            <Stack.Screen name={SCREEN.HOME_SCREEN} component={ui.HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator

