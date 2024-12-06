import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("@/assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("@/assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("@/assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
  //return <Slot />;
};

export default RootLayout;
