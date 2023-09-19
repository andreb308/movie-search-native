import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ContainerView, StyledText } from "./HomeStyle";

export default function Home({ path }: { path: string }) {
  return (
    <ContainerView>
      <StyledText>Escolha um filme?</StyledText>
      <StatusBar style="auto" />
    </ContainerView>
  );
}
