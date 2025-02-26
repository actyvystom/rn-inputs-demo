import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable
} from "react-native";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Login</Text>
      <TextInput
        placeholder="User name"
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />
      <TextInput
        placeholder="password"
        onChangeText={(pw) => {
          setPassword(pw);
        }}
        value={password}
        secureTextEntry
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
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
