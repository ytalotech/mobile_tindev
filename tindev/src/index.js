import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

import Login from './pages/Login';

export default function App(){
  return(
    <Login />

    // a primeria chave indica que quero colocar javascript e a outra é um objeto do js
    // flex:1 - ocupe todo o espaço possivel
    // <View style={ styles.container }>
    //   <Text style={ styles.text }>Hello Word</Text>
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     //display: 'flex',
//     //flexDirection: 'row', //os elementos vem um lado do outro, mas tem que usar o display junto. por padrão é colum mas irei colocar row
//     backgroundColor: '#7159c1', 
//     justifyContent: 'center', //alinha verticalmente
//     alignItems: 'center' //alinha no centro da tela. Alinha horizontalmente
//   },
//   text: {
//     fontWeight: 'bold', //negrito
//     color: '#FFF',
//     fontSize: 20
//   }
// })