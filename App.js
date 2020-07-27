import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Spinner } from 'native-base'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { navigationRef } from './RootNavigation'
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'
import SearchGift from './screens/SearchGift'
import ViewGift from './screens/ViewGift'

const Stack = createStackNavigator()
const App = () => {
  const [ready, setReady] = useState(false)
  useEffect(async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    setReady(true)
  }, [])
  if (!ready) {
    return <Spinner color='red' />
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SearchGift'
          component={SearchGift}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ViewGift'
          component={ViewGift}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a74a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
})

export default App
