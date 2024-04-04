import React from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native'
import { useAuth } from '../context/AuthContext'

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
                <TextInput style={StyleSheet.input} placeholder="Email" onChangeText={(text)}></TextInput>
                <TextInput style={StyleSheet.input} placeholder="Password" secureTextEntry={true} onChangeText={}></TextInput>
            </View>
        </View>
    )
}

export default Login