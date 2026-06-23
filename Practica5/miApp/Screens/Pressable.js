import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function PressableScreen() {
    const [vecesPresionado, setVecesPresionado] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Veces presionado: {vecesPresionado}
            </Text>

            <Pressable
                onPress={() => setVecesPresionado(vecesPresionado + 1)}
                style={({ pressed }) => [
                    styles.boton,
                    { backgroundColor: pressed ? '#0056b3' : '#007BFF' } // Cambia de color si está presionado
                ]}
            >
                {({ pressed }) => (
                    <Text style={styles.textoBoton}>
                        {pressed ? '¡Soltando!' : 'Presióname'}
                    </Text>
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 30
    },
    boton: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    textoBoton: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 20,
    }
});