import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Switch, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Parche de compatibilidad para web (Por si lo pruebas en el navegador)
if (Platform.OS === "web") {
  Alert.alert = (titular, mensaje) => {
    window.alert(titular + (mensaje ? "\n" + mensaje : ""));
  };
}

export default function Practica13() {
  // Estados para los TextInput
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  // Estados para los Switch
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  // Función principal de validación y envío
  const validarRegistro = () => {
    // 1. Validar que no haya campos vacíos
    if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return; // Detiene la ejecución aquí
    }

    // 2. Validar que el semestre sea un número válido
    if (isNaN(semestre)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    // 3. Si todo está correcto, disparamos la alerta de éxito
    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <Text style={styles.tituloPrincipal}>Registro de Evento Universitario</Text>

        {/* Zona de TextInputs */}
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />
        <TextInput
          style={styles.input}
          placeholder="Semestre"
          value={semestre}
          onChangeText={setSemestre}
          /* keyboardType="numeric" */
        />

        {/* Zona de Opciones */}
        <Text style={styles.subtitulo}>Opciones</Text>

        <View style={styles.filaSwitch}>
          <Text style={styles.textoSwitch}>¿Asistirá al taller?</Text>
          <Switch value={taller} onValueChange={setTaller} />
        </View>

        <View style={styles.filaSwitch}>
          <Text style={styles.textoSwitch}>¿Requiere constancia?</Text>
          <Switch value={constancia} onValueChange={setConstancia} />
        </View>

        <View style={styles.filaSwitch}>
          <Text style={styles.textoSwitch}>¿Participará en deportes?</Text>
          <Switch value={deportes} onValueChange={setDeportes} />
        </View>

        {/* Botón de Envío */}
        <View style={styles.botonContainer}>
          <Button title="Enviar Registro" onPress={validarRegistro} color="#007BFF" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 20,
  },
  tituloPrincipal: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    color: '#000',
  },
  filaSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  textoSwitch: {
    fontSize: 16,
    color: '#333',
  },
  botonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  }
});