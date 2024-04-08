import React from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [re_password, setRe_Password] = useState("")
    const {onLogin, onRegister} = useAuth()

    const login = async () => {
        const result = await onLogin(email, password)
        if (result && result.error) 
        {
            alert(result.message)
        }
    }

    const register = async () => {
        const result = await onRegister(email, password, re_password)
        if (result && result.error) 
        {
            alert(result.message)
        } else
        {
            login()
        }
    }


    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.form}>
                <TextInput style={StyleSheet.input} placeholder="Email" onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput style={StyleSheet.input} placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)}></TextInput>
                <Button onPress={login} title="Sign in"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        gap: 10,
        width: '60%'
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderRadius: 4,

    }})

export default Login