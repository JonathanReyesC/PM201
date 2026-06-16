import { StyleSheet, View, Text } from 'react-native-web';

export default function Componente1() {
  return (
    <View style={styles.container}>
      <Text> Aqui va la primera practica de Componentes Nativos </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});