import React, { useState } from "react";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import {platillo} from '../components/Platillo'

export const tarjetaPlatillo = ({nombre, precio, paisOrigen, style}) => {
    const [mostrar, setMostrar] = useState(false);
    
    return(
         
        <View style={[estilos.tarjeta, style]}>  
            <Text style={estilos.nombre}>{nombre}</Text>

                <Text style={estilos.carrera}>{carrera}</Text>
                <Text style={estilos.otroTexto}>{materia}</Text>
                <Text style={estilos.otroTexto}>{cuatrimestre}</Text>

            <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)}/>
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