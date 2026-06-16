import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text } from 'react-native';
import React, { useState } from 'react';
import TarjetaScreen from './TarjetasScreen';
import Componente1 from './Componente1';

export default function App() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'tarjetas':
      return <TarjetaScreen />;
    case 'componente1':
      return <Componente1 />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text>Menu de Practicas</Text>
          <Button title='Practica Tarjetas' onPress={() => setScreen('tarjetas')} />
          <Button title='Practica Componente1' onPress={() => setScreen('componente1')} />
          <StatusBar style="auto" />
        </View>
      ); 
  } 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', 
  },
});