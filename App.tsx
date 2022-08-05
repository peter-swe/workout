import {StatusBar} from "expo-status-bar";
import {useColorScheme} from "react-native";
import {StyleSheet, Text, View} from "react-native";
import Navigation from "./navigation";
import useCachedResources from "./hooks/useCachedResources";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  const isLoaded = useCachedResources();
  const colorScheme = useColorScheme();

  if (isLoaded) {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
