//Zona 1: Importaciones de archivos y Componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

//Zona 2: Main - componentes 
export default function App() {
  return (
    <View style={styles.container}>

      <Perfil nombre="Jonathan Carbajal Reyes" carrera="Ingeniería en Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />
      <Perfil nombre="Santiago Amaya" carrera="Ingeniería en Sistemas Computacionales" materia="Programación Movil" cuatrimestre="9" />

      <StatusBar style="auto" />
    </View>
  );
}

//Zona 3: Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});