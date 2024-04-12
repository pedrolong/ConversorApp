import { StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "../styles/Style";

export default function TxtComponents({ texto }) {
  return <Text style={styles.texto}>{texto}</Text>;
}
