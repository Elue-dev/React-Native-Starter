import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({});
    setFontLoaded(true);
  };

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
