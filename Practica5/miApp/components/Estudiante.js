import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export function Estudiante(props) {
    return (
        <View style={styles.cards}>
            <Text style={styles.texto}>
                Nombre: {props.nombre}
            </Text>
            <Text style={styles.texto}>
                Carrera: {props.carrera}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cards: {
        backgroundColor: '#f0f4f8',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d9e2ec',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3, // Sombra para Android
    },
    texto: {
        fontSize: 16,
        fontWeight: '500',
        color: '#334e68',
        marginBottom: 4,
    }
});