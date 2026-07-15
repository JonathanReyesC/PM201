import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../components/Perfil';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Perfil style={styles.tarjetaVerde} nombre="Josue Hernandez Cruz" carrera="Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />
      <Perfil style={styles.tarjetaRoja} nombre="Victor Manuel Arias Franco" carrera="Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />
      <Perfil style={styles.tarjetaVerde} nombre="Jonathan Carbajal Reyes" carrera="Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start', 
  },
  tarjetaVerde: {
    backgroundColor: 'green',
  },
  tarjetaRoja: {
    backgroundColor: 'red',
  },
});