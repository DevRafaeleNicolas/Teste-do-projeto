import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import Menu from './src/Componentes/Menu/index';

export default function App() {
 return (
  <NavigationContainer>
    <Menu/>
  </NavigationContainer>
   
  );
}

