import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MenuScreen from './Screens/MenuScreen'


export default function App() {
  return (

    
    <MenuScreen></MenuScreen>
 
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
  
});