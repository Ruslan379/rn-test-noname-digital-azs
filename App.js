import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  // Button,
  TouchableOpacity,
} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        style={styles.image}>
        <View style={styles.innerBox}>

          <Text style={styles.textOne}>Open up App</Text>
          <Text style={styles.textTwo}>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>EMAIL</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>PASSWORD</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          {/* <Button title='SIGN IN' /> */}
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <Text style={styles.btnTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
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
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    marginHorizontal: 20,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  innerBox: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 150,
    padding: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 15,
  },
  textOne: {
    color: "red",
    fontSize: 30
  },
  textTwo: {
    color: "green",
    textAlign: 'center',
  },
  form: {
    marginHorizontal: 20,
  },
  inputTitle: {
    color: "darkmagenta",
    marginBottom: 5,
    fontSize: 18,

  },
  input: {
    // width: 200,
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    // marginHorizontal: 20,
    borderColor: "brown",
    borderRadius: 5,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "darkorange",
    borderRadius: 5,
    // width: 100,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,

  },
  btnTitle: {
    color: "darkolivegreen",
    fontSize: 16,
  },
});
