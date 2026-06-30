import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

export default function SectionListScreen() {
 
    const datos = [
        {
            title: 'Ingeniería en Sistemas',
            data: [
                { nombre: 'Erick' },
                { nombre: 'Juan' },
                { nombre: 'Jonathan' }
            ]
        },
        {
            title: 'Ingeniería en Manufactura',
            data: [
                { nombre: 'Ana' },
                { nombre: 'Luis' }
            ]
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Estudiantes por carrera
            </Text>

            <SectionList
                sections={datos}
                
                keyExtractor={(item, index) => item.nombre + index} 
                
               
                renderSectionHeader={({ section }) => (
                    <Text style={styles.header}>
                        {section.title}
                    </Text>
                )}
                
                
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        {item.nombre}
                    </Text>
                )}
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
        color: '#333',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginTop: 15,
        color: '#007BFF', // Color azul para resaltar las carreras
        borderRadius: 5,
    },
    item: {
        fontSize: 18,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginLeft: 10,
    }
});