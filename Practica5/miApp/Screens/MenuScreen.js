import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importaciones de tus pantallas
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PressableScreen from './Pressable'; 
import SwitchScreen from './SwitchScreen';

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
    justifyContent: 'center', // Centra todo en la pantalla
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botonesContenedor: {
    gap: 15, // Da un espacio uniforme entre cada botón
  }
});