import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { Perfil } from '../components/Perfil'; 

const fondo_1 = require('../assets/imagen1.jpg');
const fondo_2 = require('../assets/imagen2.jpg');

export const ImagenFondo = () => {
    const [fondo, setFondo] = useState(false);

    return (
        <ImageBackground
            style={styles.container}
            source={fondo ? fondo_1 : fondo_2}
            resizeMode='cover'
            imageStyle={{ opacity: 0.8 }}
            blurRadius={2} 
        >
            <View style={styles.vista}>
                
                {/* Tu tarjeta de presentación sobre el fondo */}
                <Perfil 
                    nombre="Jonathan Carbajal" 
                    carrera="Ing. Sistemas Computacionales" 
                    materia="Programación Móvil" 
                    cuatrimestre="9" 
                    style={{backgroundColor: 'rgba(0,0,0,0.7)'}}
                />

                <Pressable
                    style={styles.boton}
                    onPress={() => setFondo(!fondo)}
                >
                    <Text style={styles.textoBoton}>Cambiar Fondo</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    vista: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
    boton: {
        backgroundColor: '#00e5ff', // Un cyan brillante que combina con tu imagen 2
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#00e5ff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    textoBoton: {
        color: '#0a0a0a',
        fontWeight: 'bold',
        fontSize: 16
    }
});