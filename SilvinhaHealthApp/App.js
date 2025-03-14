import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Silvinha Health App</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subTitle}>Calculadora de IMC</Text>
        <View>
          <Text style={styles.label}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder='ex. 1.70'
            keyboardType='numeric'
          />
        </View>
        <View style={{marginTop: 25 }}>
          <Text style={styles.label}>peso</Text>
          <TextInput
            style={styles.input}
            placeholder='ex. 1.70'
            keyboardType='numeric'
          />
        </View>

        <TouchableOpacity
         style={styles.button}
         onPress={() => alert("aahhhhhhhhh")}
         >
          <Ionicons name="caculate-sharp" size={24} color="#edf2f4" />
          <Text style={styles.text}>Calcular</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Edf2f4',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#d90429',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  title: {
    color: "#edf2f4",
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#edf2f4'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: "#d90429",
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    color: '#000',
    fontSize: 18,
  },
  input: {
    height: 45,
    width: '100%',
    fontSize: 18,
    borderColor: '#D90429',
    borderBottomWidth: 1
  },
  button:{
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef233c',
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 10,

  },
  text:{
    color: '#edf2f4',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  }
});