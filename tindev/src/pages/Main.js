import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main(){
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />

            <View style={styles.cardsContainer}>
                <View style={[styles.card, { zIndex: 3 }]}>
                    {/* toda imagem vinda de uma url sem ser local deve ser setado o tamanho */}
                    <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/54129629?v=4' }} />
                    <View style={styles.footer}>
                        <Text styles={styles.name}>Ytalo Lopes</Text>
                        <Text style={styles.bio} numberOfLines={3} >CEO na Lopessoftec. Desenvolvedor web em PHP e aprendendo Javascript, reactJs, React Native, NodeJS,... Sempre em busca de novos conhecimentos.</Text>
                    </View>
                </View>

                <View style={[styles.card, { zIndex: 2 }]}>
                    {/* toda imagem vinda de uma url sem ser local deve ser setado o tamanho */}
                    <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/54129629?v=4' }} />
                    <View style={styles.footer}>
                        <Text styles={styles.name}>Ytalo Lopes</Text>
                        <Text style={styles.bio} numberOfLines={3} >CEO na Lopessoftec. Desenvolvedor web em PHP e aprendendo Javascript, reactJs, React Native, NodeJS,... Sempre em busca de novos conhecimentos.</Text>
                    </View>
                </View>

                <View style={[styles.card, { zIndex: 1 }]}>
                    {/* toda imagem vinda de uma url sem ser local deve ser setado o tamanho */}
                    <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/54129629?v=4' }} />
                    <View style={styles.footer}>
                        <Text styles={styles.name}>Ytalo Lopes</Text>
                        <Text style={styles.bio} numberOfLines={3} >CEO na Lopessoftec. Desenvolvedor web em PHP e aprendendo Javascript, reactJs, React Native, NodeJS,... Sempre em busca de novos conhecimentos.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={dislike} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
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