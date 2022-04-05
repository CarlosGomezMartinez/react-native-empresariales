import React, { useState } from "react";
import Navigation from "./navigation/Navigation";

//Font
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () => {
  return Font.loadAsync({
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
};

const App = () => {
  const [fontsloaded, setFontsLoaded] = useState(false);

  if (!fontsloaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
  return <Navigation />;
};

export default App;
