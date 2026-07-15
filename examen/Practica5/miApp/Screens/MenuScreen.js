import React from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.titulo}>Menú de Prácticas</Text>

      {/* Prácticas del 1 al 11 (Botones Azules) */}
      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('TarjetasScreen')}>
        <Text style={styles.botonTexto}>1. TARJETAS</Text>
      </Pressable>

      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('ScrollSafeAreaScreen')}>
        <Text style={styles.botonTexto}>2. SCROLL & SAFEAREA</Text>
      </Pressable>

      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('PressableScreen')}>
        <Text style={styles.botonTexto}>3. PRESSABLE</Text>
      </Pressable>

      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('SwitchScreen')}>
        <Text style={styles.botonTexto}>4. SWITCH</Text>
      </Pressable>

      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('TextInputScreen')}>
        <Text style={styles.botonTexto}>5. TEXTINPUT</Text>
      </Pressable>

      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('AlertScreen')}>
        <Text style={styles.botonTexto}>6. ALERT</Text>
      </Pressable>

      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('Practica13Screen')}>
        <Text style={styles.botonTexto}>7. PRÁCTICA 13</Text>
      </Pressable>

      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('FlatListScreen')}>
        <Text style={styles.botonTexto}>8. FLATLIST</Text>
      </Pressable>

      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('SectionListScreen')}>
        <Text style={styles.botonTexto}>9. SECTIONLIST</Text>
      </Pressable>

      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('ImagenFondoScreen')}>
        <Text style={styles.botonTexto}>10. IMAGEN BACKGROUND</Text>
      </Pressable>

      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('SplashScreen')}>
        <Text style={styles.botonTexto}>11. SPLASH SCREEN (CARGA)</Text>
      </Pressable>

      {/* Práctica 12 (Botón Oscuro según tu captura) */}
      <Pressable style={styles.botonOscuro} onPress={() => navigation.navigate('ComponentesNativosScreen')}>
        <Text style={styles.botonTexto}>12. COMPONENTES NATIVOS</Text>
      </Pressable>

      {/* Práctica 13 / Práctica 17 (Botón Cobre/Teal según tu captura) */}
      <Pressable style={styles.botonTeal} onPress={() => navigation.navigate('CatalogoLibrosScreen')}>
        <Text style={styles.botonTexto}>13. PRÁCTICA 17 (CATÁLOGO LIBROS)</Text>
      </Pressable>

      {/* NUEVA: Práctica 18 (Modal & BottomSheet) */}
      <Pressable style={styles.botonAzul} onPress={() => navigation.navigate('Componente1')}>
        <Text style={styles.botonTexto}>14. PRÁCTICA 18 (MODAL & BOTTOM SHEET)</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#000',
    textAlign: 'center',
  },
  botonTexto: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  // Estilo para los botones azules estándar (1 al 11 y el 14)
  botonAzul: {
    backgroundColor: '#1A91FF',
    width: '90%',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  // Estilo para el botón 12 (Componentes Nativos)
  botonOscuro: {
    backgroundColor: '#203354',
    width: '90%',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  // Estilo para el botón 13 (Catálogo Libros)
  botonTeal: {
    backgroundColor: '#007B78',
    width: '90%',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
});