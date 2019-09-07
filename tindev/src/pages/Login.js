import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
//KeyboardAvoidingView é tipo a view, mas é para ficar melhor no ios
import { KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }){
    const [user, setUser] = useState('');

    //se eu colocar valores dentro do colchetes ele ira executar mais de uma vez
    useEffect(()=>{
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('Main', {user})
            }
        })
    }, []);

    async function handleLogin(){
        const response = await api.post('/devs', { username: user })

        const { _id } = response.data;

        //só aceita string ou numeric, se estiver em um vetor tenho que transformar em json
        await AsyncStorage.setItem('user', _id);

        navigation.navigate('Main', { user: _id });
    }

    return (
        <KeyboardAvoidingView 
            behavior="padding"
            enabled={Platform.OS === 'ios'}//ira abiliatar se o usuario estiver em uma plataforma ios
            style={styles.container}
        >
            <Image source={logo} />

            <TextInput 
                autoCapitalize="none" //ele nunca vai colocar uma letra em caixa alta
                autoCorrect={false} // agota ele não da mais sugestão de correção
                placeholder="Digite seu usuário no Github" 
                placeholderTextColor="#999"
                style={styles.input}
                value={user}
                onChangeText={setUser}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding:30 // ele fica 30 pixels distante das minhas bordas
    },

    input: {
        height: 46, //altura
        alignSelf: 'stretch', // para ocupar toda a largura possivel
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15 //tipo padding: 0 15
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});