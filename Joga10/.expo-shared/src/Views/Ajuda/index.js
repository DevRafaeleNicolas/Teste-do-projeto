import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
 } from 'react-native';

export default function Ajuda() {
  return (
    <ScrollView style = {styles.contaneir}>
      <View >
      <TouchableOpacity>
      <Text> anexe uma foto da sua dúvida</Text>
      <Image style={styles.imagemAjuda} source={require('../../Imagens/user_padrao.png')}></Image>
      </TouchableOpacity>
      </View>
      <Text style={styles.titulo}> Descreva abaixo sua dúvida</Text>
        <TextInput style={styles.campo} placeholder=''/>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  contaneir:{
    flex: 1,
    backgroundColor: '#1565c0',
    paddingHorizontal:20,

  },
  titulo:{
    marginTop:10
  },
  campo:{
    backgroundColor:'#B2BEBF',
    height:50,
  },
  imagemAjuda:{
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:100,
    borderRadius:10,
  }

})