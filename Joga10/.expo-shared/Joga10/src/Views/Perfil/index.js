import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import { Picker } from '@react-native-community/picker';

export default function Perfil() {
  const [posicaoSelecionada, setPosicaoSelecionada] = useState(0);
  const [pedominante, setPeDominante] = useState(0);
  return (
    <ScrollView style={styles.container}>
    <View style={{paddingVertical:10, justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity>
      <Image style={styles.imagemuser}  source={require('../../Imagens/user_padrao.png')}/>
      </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Nome</Text>
      <TextInput style={styles.campo} placeholder='seu nome' />
      <Text style={styles.titulo}>Idade</Text>
      <TextInput style={styles.campoIdade} placeholder='sua idade' keyboardType='numeric' />
      <Text style={styles.titulo}>Naturalidade</Text>
      <TextInput style={styles.campo} placeholder='naturalidade' />
      <Text style={styles.titulo}>Nacionalidade</Text>
      <TextInput style={styles.campo} placeholder='nacionalidade' />
      <Text style={styles.titulo}>Altura</Text>
      <TextInput style={styles.campo} placeholder='altura' />
      <Text style={styles.titulo}>Peso</Text>
      <TextInput style={styles.campo} placeholder='peso' />
      <Text style={styles.titulo}>Time</Text>
      <TextInput style={styles.campo} placeholder='informe o time que joga' />

      <View>
        <Text style={styles.titulo}>Pé Dominante</Text>
        <View style={styles.campoPosição}>
          <Picker selectedValue={pedominante}
            onValueChange={(itemValue, itemIndex) => setPeDominante (itemValue)}
          >
            <Picker.Item key={0} value={0} label='Direito' />
            <Picker.Item key={1} value={1} label='Esquerdo'/>
            <Picker.Item key={2} value={2} label='Ambidestro' />
          </Picker>
        </View>
      </View>

      <View>
        <Text style={styles.titulo}>Posição</Text>
        <View style={styles.campoPosição}>
          <Picker selectedValue={posicaoSelecionada}
            onValueChange={(itemValue, itemIndex) => setPosicaoSelecionada(itemValue)}
          >
            <Picker.Item key={0} value={0} label='Goleiro' />
            <Picker.Item key={1} value={1} label='Zagueiro' />
            <Picker.Item key={2} value={2} label='Lateral' />
            <Picker.Item key={3} value={3} label='Volante' />
            <Picker.Item key={4} value={4} label='Meio' />
            <Picker.Item key={5} value={5} label='Atacante' />
          </Picker>
        </View>
      </View>

    </ScrollView>


  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1565c0',
    marginTop: 0,
    marginHorizontal: 0,
    paddingHorizontal:20,
  },
  campo: {
    backgroundColor: '#B2BEBF',
    fontSize: 18,
    padding: 8,
    marginBottom: 0,
    borderRadius: 10,
  },
  campoIdade: {
    backgroundColor: '#B2BEBF',
    fontSize: 18,
    padding: 8,
    marginBottom: 0,
    borderRadius: 10,
  },
  campoPosição: {
    backgroundColor: '#B2BEBF',
    borderRadius: 10,

  },
  titulo: {
    fontSize: 15,
    color: '#000',
    marginHorizontal:10,
  },

  imagemuser:{
    justifyContent:'center',
    alignItems:'center',
    width:80,
    height:80,
    borderRadius:10,


  },

})