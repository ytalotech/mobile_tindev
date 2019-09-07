import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main({ navigation }){
    const id = navigation.getParam('user');    
    const [users, setUsers] = useState([]);

    console.log(id);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: id,
                }
            });
            setUsers(response.data);
        }
        loadUsers();
    }, [id]);

    async function handleLike(){
        //estou pegando o primeiro usuario e armazenando o resto no ...rest
        const [user, ...rest] = users; //[user] ira pegar a primeira posição do array

        await api.post(`/devs/${ user._id }/likes`, null, {
            headers: { user: id },
        });

        setUsers(rest);
    }
    async function handleDislike(){
        const [user, ...rest] = users;

        await api.post(`/devs/${ user._id }/dislikes`, null, {
            headers: { user: id },
        });
        setUsers(rest);
    }

    async function handleLogout(){
        await AsyncStorage.clear();

        navigation.navigate('login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Image style={styles.logo} source={logo} />
            </TouchableOpacity>

            <View style={styles.cardsContainer}>
                { users.length === 0
                    ? <Text style={styles.empty}>Acabou :(</Text> 
                    : (
                        users.map((user, index) => (
                            <View key={ user._id } style={[styles.card, { zIndex: users.length - index }]}>
                            {/* toda imagem vinda de uma url sem ser local deve ser setado o tamanho */}
                            <Image style={styles.avatar} source={{ uri: user.avatar }} />
                            <View style={styles.footer}>
                                <Text styles={styles.name}>{ user.name }</Text>
                                <Text style={styles.bio} numberOfLines={3} >{ user.bio }</Text>
                            </View>
                        </View>
                        ))
                    )}
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={handleDislike}>
                    <Image source={dislike} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLike}>
                    <Image source={like} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    logo:{
        marginTop: 30
    },

    empty: {
        alignSelf: 'center',
        color: '#999',
        fontSize: 24,
        fontWeight: 'bold'
    },

    cardsContainer: {
        flex: 1,
        //para ocupar a largura maxima da tela
        alignSelf: 'stretch',
        justifyContent: 'center',
        //altura maxima
        maxHeight: 500
    },

    card: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        margin: 30,
        //vai fazer com que a nossa borderRadius se aplique
        overflow: 'hidden',
        //para um card ficar por cima do outro
        position: 'absolute',
        //para ele ocupar todo espaco possivel do maxHeight: 500
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },

    avatar: {
        flex: 1,
        height: 300
    },

    footer: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },

    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },

    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        //causa uma sobra no botao no android
        elevation: 2,
        //causa uma sobra no botao no ios
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
});