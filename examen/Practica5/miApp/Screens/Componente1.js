import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
// Las rutas están correctas saliendo de 'Screens' y entrando a 'components'
import { MiModal } from '../components/MiModal';
import { BottomSheet } from '../components/BottomSheet';

export default function Componente1() {
  const [modalVisible, setModalVisible] = useState(false);
  const [sheetVisible, setSheetVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Práctica: Modal y Bottom Sheet</Text>

      <Pressable
        style={[styles.boton, { backgroundColor: '#2a7e01' }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.botonTexto}>Mostrar Modal</Text>
      </Pressable>

      <Pressable
        style={[styles.boton, { backgroundColor: 'red' }]}
        onPress={() => setSheetVisible(true)}
      >
        <Text style={styles.botonTexto}>Abrir Bottom Sheet</Text>
      </Pressable>

      {/* Modal personalizado con tus datos de la UPQ */}
      <MiModal
        visible={modalVisible}
        onCerrar={() => setModalVisible(false)}
        titulo="Datos del Estudiante"
      >
        <Text>Nombre: Jonathan Carbajal Reyes</Text>
        <Text>Carrera: Ing. en Sistemas Computacionales</Text>
        <Text>Universidad: UPQ</Text>
      </MiModal>

      <BottomSheet
        visible={sheetVisible}
        onCerrar={() => setSheetVisible(false)}
        titulo="Bottom Sheet"
      >
        <Text>Este panel sale desde abajo.</Text>
        <Text>Se puede cerrar tocando el área oscura.</Text>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20, // Un poco más de espacio para que no quede pegado a los botones
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginBottom: 15, // Espacio entre los dos botones
  },
  botonTexto: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});