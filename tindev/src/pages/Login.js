import React from 'react';
//KeyboardAvoidingView é tipo a view, mas é para ficar melhor no ios
import { KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';

export default function Login(){
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
            />

            <TouchableOpacity style={styles.button}>
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