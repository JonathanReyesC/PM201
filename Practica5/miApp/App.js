import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>

      <Perfil 
        style={styles.tarjetaVerde} 
        nombre="Jonathan Carbajal Reyes" 
        carrera="Ingeniería en Sistemas Computacionales" 
        materia="Programación Móvil" 
        cuatrimestre="9" 
      />

      
      <Perfil 
        style={styles.tarjetaRoja} 
        nombre="Santiago Amaya" 
        carrera="Ingeniería en Sistemas Computacionales" 
        materia="Programación Movil" 
        cuatrimestre="9" 
      />

           <Perfil 
        style={styles.tarjetaVerde} 
        nombre="Jonathan Carbajal Reyes" 
        carrera="Ingeniería en Sistemas Computacionales" 
        materia="Programación Móvil" 
        cuatrimestre="9" 
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row' , 
  },
  tarjetaVerde: {
    backgroundColor: 'green' 
  },
  tarjetaRoja: {
    backgroundColor: 'red' 
  },
});