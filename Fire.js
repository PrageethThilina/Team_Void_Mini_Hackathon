import * as firebase from 'firebase'
import { ToastAndroid } from 'react-native'
import * as RootNavigation from './RootNavigation'

const firebaseConfig = {
  apiKey: 'AIzaSyAH5VseCWcb_YN2gEv4g4KZy_QCApD2Yu8',
  authDomain: 'reactnativefirebasetest-fd8e5.firebaseapp.com',
  databaseURL: 'https://reactnativefirebasetest-fd8e5.firebaseio.com',
  projectId: 'reactnativefirebasetest-fd8e5',
  storageBucket: 'reactnativefirebasetest-fd8e5.appspot.com',
  messagingSenderId: '49890911466',
  appId: '1:49890911466:web:b0f34b422d151549462393',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
console.log('Firebase Connected')

export const registerUser = async (username, password) => {
  try {
    console.log(username)
    console.log(password)

    await firebase.auth().createUserWithEmailAndPassword(username, password)
    ToastAndroid.show('Successfuly Registered User', ToastAndroid.SHORT)
  } catch (error) {
    console.log(error)
    return ToastAndroid.show(error.toString(), ToastAndroid.SHORT)
  }
}

export const loginUser = async (username, password) => {
  try {
    console.log(username)
    console.log(password)

    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
    ToastAndroid.show('Successful', ToastAndroid.SHORT)
    console.log(user)
    RootNavigation.navigate('Dashboard')
  } catch (error) {
    console.log(error)
    return ToastAndroid.show(error.toString(), ToastAndroid.SHORT)
  }
}
