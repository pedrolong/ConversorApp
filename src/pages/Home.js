import { TouchableOpacity, View } from "react-native";
import TxtComponents from "../Components/TxtComponents";
import TxtInputComponents from "../Components/TxtInputComponents";
import { Touchable, Text } from "react-native";
import { useState } from "react";
import { Modal } from "react-native";
import { styles } from "../styles/Style";

export default function Home() {
  const [celsius, setCelsius] = useState("");
  const resultado = (celsius * 9) / 5 + 32;
  const [modal, setModal] = useState(false);
  function openModal() {
    if (celsius === "") {
      alert("valor invalido");
    } else {
      setModal(true);
    }
  }
  function BackModal() {
    setModal(false);
    setCelsius("");
  }
  return (
    <View style={styles.container}>
      <TxtComponents texto={"Conversor de Celsius"} />
      <TxtInputComponents valor={celsius} passar={setCelsius} />
      <TouchableOpacity onPress={openModal} style={styles.button}>
        <Text> Converter </Text>
      </TouchableOpacity>
      <Modal visible={modal}>
        <View style={styles.container}>
          <Text style={styles.texto}>{resultado}</Text>
          <TouchableOpacity onPress={BackModal} style={styles.button2}>
            <Text> Converter novamente </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
