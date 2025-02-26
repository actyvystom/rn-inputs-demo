import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  SafeAreaView,
  useWindowDimensions
} from "react-native";
import { Image } from "expo-image";

import { useState } from "react";
export default function App() {
  const { height, width } = useWindowDimensions();
  console.log(`width: ${width}, height: ${height}`);
  const isLandscape = width > height;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const movieImage = require("./assets/pulp_fiction.jpg");
  return (
    <SafeAreaView
      style={isLandscape ? styles.containerLandscape : styles.container}
      onLayout={(e) => {
        console.log(e.nativeEvent.layout);
      }}
    >
      <StatusBar style="auto" hidden />

      <Text>Login</Text>
      <TextInput
        placeholder="User name"
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
        style={styles.input}
        maxLength={20}
      />
      <TextInput
        placeholder="password"
        onChangeText={(pw) => {
          setPassword(pw);
        }}
        value={password}
        secureTextEntry
        style={styles.input}
        maxLength={20}
      />
      {/* <Button
        onPress={() => {
          console.log("Username: ", name);
          console.log("Password: ", password);
        }}
        title="Login"
      /> */}
      <Pressable
        onPress={() => {
          console.log("Username: ", name);
          console.log("Password: ", password);
        }}
      >
        <View style={styles.button}>
          <Text style={{ color: "white" }}>Login</Text>
        </View>
      </Pressable>
      <Image source={movieImage} style={{ width: width, height: height }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  },
  containerLandscape: {
    flex: 1,
    backgroundColor: "#0ff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 4,
    padding: 10
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 200,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 4
  }
});
