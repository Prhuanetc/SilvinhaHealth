import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Silvinha Health App</Text>
      </View>
      <View style={styles.formContent}>
        <Text>Opaaaaa!</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 50,
  },
  titleContaine: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: "#ff0043",
    fontSize: 28,
    fontWeight: 'bold'
  }

});
