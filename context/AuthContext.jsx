import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios';
import * as SecureStore from 'expo-secure-store'

const TOKEN_KEY = 'my-jwt'
export const API_URL = ''
const AuthContext = createContext({})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: null
    })

useEffect(() => {
    const loadToken = async () => {
        const token = await SecureStore.getItemAsync(TOKEN_KEY)
        console.log("stored", token)


    if (token) {
        setAuthState({
            token: token,
            authenticated: true
        })
    }
    }
    loadToken()
}, [])

const register = async (email, password, re_password) => {
    try {
        return await axios.post("https://newgym2backend.onrender.com/auth/users/", {email, password, re_password})
    } catch(e) {
        return {error: true, msg: (e).response.data.msg }
    }
}

const login = async (email, password) => {
    try {
        const result = await axios.post("https://newgym2backend.onrender.com/auth/jwt/create", {email, password})

        setAuthState({
            token: result.data.access,
            authenticated: true
        })

        console.log(result.data.access)

        await SecureStore.setItemAsync(TOKEN_KEY, result.data.access)

        return result
    } catch(e) {
        return {error: true, msg: (e).response.data.msg }
    }
}

const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY)

    setAuthState({
        token: null,
        authenticated: false
    })
}

const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState
};

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}