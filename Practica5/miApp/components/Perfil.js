import { View, Text, StyleSheet } from 'react-native';

export const Perfil = () => {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.texto}>Nombre: Jonathan Carbajal Reyes</Text>
      <Text style={styles.texto}>Carrera: Ingeniería en Sistemas Computacionales</Text>
      <Text style={styles.texto}>Materia: Programación Móvil (PM201)</Text>
      <Text style={styles.texto}>Cuatrimestre: Noveno</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#90caf9',
    alignItems: 'center'
  },
  texto: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333'
  }
});