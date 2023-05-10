import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  // Button,
  TouchableOpacity,
  Platform,
  // KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

// -------------------------------------------------------------------------------------------------------
const initialState = {
  // nickname: "",
  email: "",
  password: ""
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default function App() {
  //! useState
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  //! Закрытие клавиатуры
  const keboardHide = () => {
    setIsShowKeyboard(false);
    // setIsFocusedLogin(false);
    // setIsFocusedMail(false);
    // setIsFocusedPassword(false);
    Keyboard.dismiss();
    console.log("state:", state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/images/background.jpg')}
          style={styles.image}
        >
          {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding ' : 'height'}
        // style={styles.containerKeyboardAvoidingView}
        > */}
          <View style={styles.innerBox}>
            <Text style={styles.textOne}>Open up App</Text>
            <Text style={styles.textTwo}>Open up App.js to start working on your app!</Text>
          </View>
          <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 200 }}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>HEADER-1</Text>
              <Text style={styles.headerTitle}>HEADER-2</Text>
            </View>
            <View>
              <Text style={styles.inputTitle}>EMAIL</Text>
              <TextInput
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
                onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.inputTitle}>PASSWORD</Text>
              <TextInput
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.password}
                onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                secureTextEntry={true}
              />
            </View>
            {/* <Button title='SIGN IN' /> */}
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.7}
              onPress={keboardHide}
            >
              <Text style={styles.btnTitle}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
          {/* </KeyboardAvoidingView> */}
        </ImageBackground>
        <StatusBar style="auto" />
      </View >
    </TouchableWithoutFeedback>
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
    // justifyContent: 'center',
    justifyContent: 'flex-end',
  },
  containerKeyboardAvoidingView: {
    flex: 1,
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
    // marginBottom: 100,
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
    borderWidth: 2,
    borderRadius: 5,
    // width: 100,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    // borderColor: Platform.OS === "ios" ? "darkorange" : "deepskyblue",
    // backgroundColor: Platform.OS === "ios" ? "deepskyblue" : "darkorange",
    ...Platform.select({
      ios: {
        borderColor: "darkorange",
        backgroundColor: 'deepskyblue',
      },
      android: {
        borderColor: "deepskyblue",
        backgroundColor: 'darkorange',
      },
    }),
  },
  btnTitle: {
    color: "darkolivegreen",
    fontSize: 16,
  },
  header: {
    // fontSize: 20,
    // color: "deeppink ",
    // textAlign: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 20,
    color: "deeppink",
    // textAlign: 'center',
  },
});
