import "react-native-gesture-handler";
import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import AppSource from "./src";

const loadFonts = async () => {
  return Font.loadAsync({
    "AvenirNextLTPro-Bold": require("./assets/fonts/AvenirNextLTPro-Bold.otf"),
    "AvenirNextLTPro-BoldCn": require("./assets/fonts/AvenirNextLTPro-BoldCn.otf"),
    "AvenirNextLTPro-Demi": require("./assets/fonts/AvenirNextLTPro-Demi.otf"),
    "AvenirNextLTPro-DemiCn": require("./assets/fonts/AvenirNextLTPro-DemiCn.otf"),
    "AvenirNextLTPro-It": require("./assets/fonts/AvenirNextLTPro-It.otf"),
    "AvenirNextLTPro-Regular": require("./assets/fonts/AvenirNextLTPro-Regular.otf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return <AppSource />;
}
