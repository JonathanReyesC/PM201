import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importaciones
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import PressableScreen from './Pressable'; 
import SwitchScreen from './SwitchScreen';
import { TextInputScreen } from './TextInputScreen'; 
import ComponenteAlert from './Alert'; 
import Practica13 from './Practica13'; 
import FlatListScreen from './FlatListScreen'; 
import SectionListScreen from './SectionListScreen';
import { ImagenFondo } from './ImagenFondo';
import { SplashScreen } from './SplashScreen';
import ComponentesNativosScreen from './ComponentesNativosScreen';

export default function App() {
    const [screen, setScreen] = useState('menu');

    useEffect(() => {
        if (screen === 'splashScreen') {
            const timer = setTimeout(() => {
                setScreen('menu');
            }, 4000); 
            return () => clearTimeout(timer); 
        }
    }, [screen]);

    switch (screen) {
        case 'tarjetas': return <TarjetasScreen />;
        case 'componente1': return <Componente1 />;
        case 'pressable': return <PressableScreen />;
        case 'switch': return <SwitchScreen />;
        case 'textinput': return <TextInputScreen />; 
        case 'alert': return <ComponenteAlert />; 
        case 'practica13': return <Practica13 />;
        case 'flatlist': return <FlatListScreen />; 
        case 'sectionlist': return <SectionListScreen />;
        case 'imagenfondo': return <ImagenFondo />;
        case 'splashScreen': return <SplashScreen />;
        case 'componentesNativos': return <ComponentesNativosScreen />;

        case 'menu':
        default:
            return (
                <SafeAreaView style={styles.container}>
                    <Text style={styles.titulo}>Menú de Prácticas</Text>
                    
              
                    <ScrollView contentContainerStyle={styles.botonesContenedor} showsVerticalScrollIndicator={false}>
                        <Button title="1. Tarjetas" onPress={() => setScreen('tarjetas')} />
                        <Button title="2. Scroll & SafeArea" onPress={() => setScreen('componente1')} />
                        <Button title="3. Pressable" onPress={() => setScreen('pressable')} />
                        <Button title="4. Switch" onPress={() => setScreen('switch')} />
                        <Button title="5. TextInput" onPress={() => setScreen('textinput')} />
                        <Button title="6. Alert" onPress={() => setScreen('alert')} />
                        <Button title="7. Práctica 13" onPress={() => setScreen('practica13')} />
                        <Button title="8. FlatList" onPress={() => setScreen('flatlist')} />
                        <Button title="9. SectionList" onPress={() => setScreen('sectionlist')} />
                        <Button title="10. Imagen Background" onPress={() => setScreen('imagenfondo')} />
                        <Button title="11. Splash Screen (Carga)" onPress={() => setScreen('splashScreen')} />
                        <Button title="12. Componentes Nativos" onPress={() => setScreen('componentesNativos')} color="#1D3557" />
                    </ScrollView>
                    
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
    paddingTop: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botonesContenedor: {
    gap: 10, 
    width: 250,
    paddingBottom: 40,
  }
});