import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

export default function KeyboardAvoidingDemo() {
  const [nombre, setNombre] = useState('');
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={styles.container}
      enabled
    >
      <Text style={styles.titulo}>KeyboardAvoidingView</Text>

      <Text style={styles.descripcion}>
        Evita que el teclado oculte el campo de texto. En este dispositivo se
        utiliza behavior="{behavior}".
      </Text>

      <TextInput
        placeholder="Ingresa tu nombre (Ej. Jonathan)"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        autoCapitalize="words"
      />

      <Text style={styles.resultado}>
        Nombre: {nombre || 'Sin capturar'}
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#007BFF',
  },
  descripcion: {
    color: '#444444',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#777777',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  resultado: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});