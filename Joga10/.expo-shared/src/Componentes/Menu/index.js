import React from 'react';
import { View, Image, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../Views/Home';
import Perfil from '../../Views/Perfil';
import Partidas from '../../Views/Partidas';
import Estatística from '../../Views/Estatística';
import Contato from '../../Views/Contato';
import Ajuda from '../../Views/Ajuda';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ColorSpace } from 'react-native-reanimated';


const drawer = createDrawerNavigator();

export default function Menu() {
 return (
    <drawer.Navigator
      screenOptions={{
        headerStyle:{
        backgroundColor:'#303f9f'
        },
        headerTintColor:'#f2f2f2',
        headerStatusBarHeight:20
      }}
      
    >

       <drawer.Screen name='Estatística' component={Estatística}
           options={{
            drawerIcon:({}) => (
              <FontAwesome
                name='database'
                size={25}
                color='#000'
              />
            )
          }}
        />

         <drawer.Screen name='Partidas' component={Partidas}
        options={{
          drawerIcon:({}) => (
            <FontAwesome
              name='check'
              size={25}
              color='#000'
            />
          )
        }}
        />

        <drawer.Screen name='Contato' component={Contato}
           options={{
            drawerIcon:({}) => (
              <FontAwesome
                name='phone'
                size={25}
                color='#000'
              />
            )
          }}
        />

        <drawer.Screen name='Home' component={Home}
          options={{
              drawerIcon:({}) => (
                <FontAwesome 
                name='home'
                size={25}
                color='#000'
                />
              )
               
              }
          }
        />
        <drawer.Screen name='Perfil' component={Perfil}
        options={{
          drawerIcon:({}) => (
            <FontAwesome
              name='user-circle'
              size={25}
              color='#000'
            />
          )
        }}
        />
        <drawer.Screen name='Ajuda' component={Ajuda}
         options={{
          drawerIcon:({}) => (
            <FontAwesome
              name='question-circle'
              size={25}
              color='#000'
            />
          )
        }}
        />
    </drawer.Navigator>
   
  );
}