import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Perfil } from '../components/Perfil';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollCont}
      >
        <Perfil style={styles.tarjetaVerde} nombre="1-Victor" carrera="Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />
        <Perfil style={styles.tarjetaRoja} nombre="2-Josue" carrera="Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />
        <Perfil style={styles.tarjetaVerde} nombre="3-Jonathan" carrera="Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />
        <Perfil style={styles.tarjetaVerde} nombre="4-Manuel" carrera="Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />
        <Perfil style={styles.tarjetaRoja} nombre="5-Hector" carrera="Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />
        <Perfil style={styles.tarjetaVerde} nombre="6-Jusma" carrera="Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9" />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  scrollCont: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 10, // Agregado para que no se peguen las tarjetas al hacer scroll
  },
  tarjetaVerde: {
    backgroundColor: 'green',
  },
  tarjetaRoja: {
    backgroundColor: 'red',
  },
});