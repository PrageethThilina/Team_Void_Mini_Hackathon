import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { registerUser, loginUser } from '../Fire'
import { Spinner } from 'native-base'

const Login = ({ navigation }) => {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [ready, setReady] = useState(true)

  const onSubmitUser = async () => {
    const { username, password } = formData
    try {
      setReady(false)
      await registerUser(username.trim(), password.trim())
      setFormData({ username: '', password: '' })
      setReady(true)
    } catch (error) {
      console.log(error)
    }
  }

  const onLoginUser = async () => {
    const { username, password } = formData
    try {
      setReady(false)
      await loginUser(username.trim(), password.trim())
      setFormData({ username: '', password: '' })
      setReady(true)
    } catch (error) {
      console.log(error)
    }
  }
  if (!ready) {
    return <Spinner color='red' />
  }
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={{ fontSize: 40, textAlign: 'center', fontWeight: 'bold' }}>
        Gift-Box
      </Text>
      <View style={{ marginTop: 64 }}>
        <Image
          source={{
            uri:
              'https://kool.lk/wp-content/uploads/2018/01/kids-stationery-pack-1.jpg',
          }}
          style={{ width: 150, height: 150, alignSelf: 'center' }}
        />
      </View>

      <View style={{ marginHorizontal: 32 }}>
        <Text style={styles.header}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Username'
          value={formData.username}
          onChangeText={(text) => {
            setFormData({ ...formData, username: text })
          }}
        />
        <Text style={styles.header}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Password'
          value={formData.password}
          onChangeText={(text) => {
            setFormData({ ...formData, password: text })
          }}
          secureTextEntry={true}
        />

        <View
          styele={{
            alignItems: 'flex-end',
            marginTop: 64,
          }}
        >
          <TouchableOpacity
            style={styles.continue}
            onPress={() => onLoginUser()}
          >
            <Text>Login</Text>
            <Ionicons name='md-arrow-round-forward' size={24} color='#FFF' />
          </TouchableOpacity>
        </View>

        <Button title='Register' onPress={() => onSubmitUser()}></Button>
        <Text style={{ fontWeight: '600', fontSize: 15, textAlign: 'center' }}>
          Enter Details Here and Register If You Dont Have an Account
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: '800',
    fontSize: 30,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BAB7C3',
    borderRadius: 30,
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#9075E3',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 125,
    marginTop: 10,
    marginBottom: 80,
  },
})

export default Login
