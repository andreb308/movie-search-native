import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ContainerView, StyledText } from "./Style";

export default function App() {
  return (
    <ContainerView>
      <StyledText>Escolha um filme!</StyledText>
      <StatusBar style="auto" />
    </ContainerView>
  );
}
