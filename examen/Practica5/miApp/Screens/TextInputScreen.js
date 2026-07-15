import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert, Button, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const TextInputScreen = () => {
    const [texto, setTexto] = useState('');
    const [numero, setNumero] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const handleAlert = () => {
        Alert.alert("Datos Guardados", `Texto: ${texto}\nCorreo: ${correo}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Hola RN: Componente TextInput</Text>
                <Text style={styles.subtitle}>Ejemplo de varios TextInput con state</Text>
                
                <TextInput
                    placeholder="Escribe algo..."
                    value={texto}
                    onChangeText={setTexto}
                    maxLength={20}
                    autoCapitalize="words"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Ingresa un número..."
                    value={numero}
                    onChangeText={(text) => setNumero(text.replace(/[^0-9]/g, ''))}
                    keyboardType="numeric"
                    maxLength={10}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Ingresa tu correo..."
                    value={correo}
                    onChangeText={setCorreo}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Ingresa una contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TextInput
                 placeholder="Escribe Una Observacion"
                    value={texto}
                    onChangeText={setTexto}
                    maxLength={20}
                    autoCapitalize="words"
                    style={styles.input}
                    />


                <Button title="Enviar y Mostrar Alerta" onPress={handleAlert} />

                <Text style={styles.subtitle}>Valores almacenados:</Text>
                <Text style={styles.result}>Texto = {texto}</Text>
                <Text style={styles.result}>Número = {numero}</Text>
                <Text style={styles.result}>Correo = {correo}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fefefe' },
    title: { fontSize: 22, fontWeight: 'bold', color: '#4A90E2', textAlign: 'center', marginBottom: 15 },
    subtitle: { fontSize: 16, color: '#555', marginTop: 15, fontWeight: 'bold' },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 12, marginTop: 10, backgroundColor: '#f9f9f9' },
    result: { fontSize: 15, color: '#333', marginTop: 5 },
});