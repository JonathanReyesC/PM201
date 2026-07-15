import React, { useState, useEffect } from 'react';
import {
    View, Text, TextInput, Pressable, FlatList,
    Alert, ActivityIndicator, ImageBackground, StyleSheet, Keyboard, Platform
} from 'react-native';

// Parche de compatibilidad para Alert en Web
if (Platform.OS === "web") {
    Alert.alert = (titular, mensaje) => {
        window.alert(titular + (mensaje ? "\n" + mensaje : ""));
    };
}


const bgImage = require('../assets/imagen1.jpg');

export default function Practica17() {
   
    const [mostrarSplash, setMostrarSplash] = useState(true);
    const [guardando, setGuardando] = useState(false);
    
   
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [libros, setLibros] = useState([]);

   
    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarSplash(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

  
    const handleAgregarLibro = () => {
        
        if (!titulo.trim() || !autor.trim() || !genero.trim()) {
            Alert.alert('Alert', 'Todos los campos son obligatorios.');
            return;
        }

       
        Keyboard.dismiss();
        setGuardando(true);

        
        setTimeout(() => {
            const nuevoLibro = {
                id: Date.now().toString(), 
                titulo: titulo.trim(),
                autor: autor.trim(),
                genero: genero.trim()
            };

           
            setLibros([...libros, nuevoLibro]);
            setTitulo('');
            setAutor('');
            setGenero('');
            setGuardando(false);

            Alert.alert('Alert', 'Libro guardado correctamente.');
        }, 4000);
    };

    
    const renderLibro = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardTexto}>Autor: {item.autor}</Text>
            <Text style={styles.cardTexto}>Género: {item.genero}</Text>
        </View>
    );

  
    if (mostrarSplash) {
        return (
            <View style={styles.splashContainer}>
                <Text style={styles.splashTexto}>Catálogo de Libros</Text>
                <ActivityIndicator size="large" color="#00e5ff" style={{ marginTop: 20 }} />
            </View>
        );
    }

   
    return (
        <ImageBackground source={bgImage} style={styles.container} resizeMode="cover" imageStyle={{ opacity: 0.9 }}>
            <View style={styles.overlay}>
                <Text style={styles.header}>Catálogo de Libros</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Título del libro"
                    value={titulo}
                    onChangeText={setTitulo}
                    editable={!guardando}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Autor"
                    value={autor}
                    onChangeText={setAutor}
                    editable={!guardando}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Género"
                    value={genero}
                    onChangeText={setGenero}
                    editable={!guardando}
                />

                <Pressable
                    style={[styles.boton, guardando && styles.botonDeshabilitado]}
                    onPress={handleAgregarLibro}
                    disabled={guardando}
                >
                    {guardando ? (
                        <View style={styles.cargandoContainer}>
                            <Text style={styles.textoBoton}>Guardando... </Text>
                            <ActivityIndicator size="small" color="#ffffff" />
                        </View>
                    ) : (
                        <Text style={styles.textoBoton}>Agregar Libro</Text>
                    )}
                </Pressable>

                <Text style={styles.totalTexto}>Total de libros: {libros.length}</Text>

                <FlatList
                    data={libros}
                    keyExtractor={(item) => item.id}
                    renderItem={renderLibro}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    splashTexto: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    container: {
        flex: 1,
        width: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)', 
        padding: 20,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 30,
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
    },
    boton: {
        backgroundColor: '#1C5B96', 
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    botonDeshabilitado: {
        backgroundColor: '#555555',
    },
    cargandoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textoBoton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalTexto: {
        color: '#00e5ff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    cardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    cardTexto: {
        fontSize: 14,
        color: '#555555',
    }
});