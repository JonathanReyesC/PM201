import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importaciones de todas tus prácticas
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PressableScreen from './Pressable'; 
import SwitchScreen from './SwitchScreen';
import { TextInputScreen } from './TextInputScreen'; 
import ComponenteAlert from './Alert'; // <-- Importamos tu nuevo archivo
import Practica13 from './Practica13';

export default function App() {
    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'componente1':
            return <Componente1 />;
        case 'pressable':
            return <PressableScreen />;
        case 'switch':
            return <SwitchScreen />;
        case 'textinput':
            return <TextInputScreen />; 
        case 'alert':
            return <ComponenteAlert />;
        case 'practica13':
            return <Practica13 />;
        case 'menu':
        default:
            return (
                <SafeAreaView style={styles.container}>
                    <Text style={styles.titulo}>Menú de Prácticas</Text>
                    
                    <View style={styles.botonesContenedor}>
                        <Button title="Práctica Tarjetas" onPress={() => setScreen('tarjetas')} />
                        <Button title="Práctica ScrollView & SafeArea" onPress={() => setScreen('componente1')} />
                        <Button title="Práctica Pressable" onPress={() => setScreen('pressable')} />
                        <Button title="Práctica Switch" onPress={() => setScreen('switch')} />
                        <Button title="Práctica TextInput" onPress={() => setScreen('textinput')} />
                        <Button title="Práctica Alert" onPress={() => setScreen('alert')} />
                        <Button title="Práctica 13: Repaso" onPress={() => setScreen('practica13')} />
                           
                    </View>
                    
                    <StatusBar style="auto" />
                </SafeAreaView>
            ); 
    } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botonesContenedor: {
    gap: 15, // Mantiene la separación limpia entre todos tus botones
  }
});