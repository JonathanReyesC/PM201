import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


import { Estudiante } from '../components/Estudiante'; 

export default function FlatListScreen() {
    
    const estudiantes = [
        { id: "1", nombre: "Cristian", carrera: "ISC" },
        { id: "2", nombre: "Jonathan", carrera: "ISC" },
        { id: "3", nombre: "Victor", carrera: "ISC" }
    ];

    // Aquí mandamos llamar a tu componente tarjeta pasándole los props
    const renderItem = ({ item }) => (
        <Estudiante nombre={item.nombre} carrera={item.carrera} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Estudiantes</Text>
            
            <FlatList
                data={estudiantes}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    }
});