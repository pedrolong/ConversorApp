import { StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "../styles/Style";

export default function TxtInputComponents({ valor, passar }) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={passar}
      placeholder="Graus em Celsius"
      value={valor}
    />
  );
}
