import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>App 1</Text>
            <Text style={styles.subtitulo}>Jonathan Carbajal Reyes</Text>
            <Text style={styles.textoCarga}>Cargando recursos...</Text>
            
            <ActivityIndicator size="large" color="#00e5ff" style={{marginTop: 25}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212' 
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    subtitulo: {
        fontSize: 18,
        color: '#00e5ff',
        marginTop: 5
    },
    textoCarga: {
        fontSize: 14,
        color: '#888888',
        marginTop: 15
    }
});