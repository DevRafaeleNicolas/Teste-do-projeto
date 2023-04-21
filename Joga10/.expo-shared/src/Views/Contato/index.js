import React from 'react';
import {
   View,
   Text, 
   StyleSheet, 
   TouchableOpacity,
   TextInput,
   ScrollView
   } from 'react-native';


export default function Contato() {
  return (
    <ScrollView style = {styles.contaneir}>
      <Text style={styles.titulo}>Telefone</Text>
      <TextInput style={styles.campo} placeholder='informe seu telefone'keyboardType='numeric'/>
      <Text style={styles.titulo}>E-mail</Text>
      <TextInput style={styles.campo} placeholder='informe seu e-mail'/>
      <Text style={styles.titulo}>Instagram</Text>
      <TextInput style={styles.campo} placeholder='informe seu instagram'keyboardType='numeric'/>
      
    </ScrollView>

  );

}

const styles = StyleSheet.create({
  contaneir:{
    flex:1,
    backgroundColor:'#1565c0'
  },

  titulo:{
    left:25,

  },

  campo:{
    backgroundColor: '#B2BEBF',
    fontSize: 18,
    padding: 8,
    borderRadius: 10,
    marginHorizontal:15
  },

})