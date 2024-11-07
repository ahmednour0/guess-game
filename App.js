import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/startgamescreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [usernumber, setusernumber] = useState(null);
  const [Gameisover, setGameisover] = useState(true);
  const [GuessRounds, setGuessRounds] = useState(0);
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontloaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      if (fontloaded) {
        // Hide the splash screen after fonts are loaded
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }
    prepare();
  }, [fontloaded]);

  const onStartNewGame = () => {
    setusernumber(null);
    setGuessRounds(0);
  };

  const gameoverhandler = (numberOfRounds) => {
    setGameisover(true);
    setGuessRounds(numberOfRounds);
  };

  const pickednumber = (number) => {
    setusernumber(number);
    setGameisover(false);
  };

  if (!appIsReady) {
    return null; // While loading, just return nothing
  }

  let screen = <StartGameScreen pickednumber={pickednumber} />;
  if (usernumber) {
    screen = <GameScreen onGameOver={gameoverhandler} userNumber={usernumber} />;
  }
  if (Gameisover && usernumber) {
    screen = (
      <GameOverScreen
        roundsNumber={GuessRounds}
        onStartNewGame={onStartNewGame}
        userNumber={usernumber}
      />
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.rootscreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootscreen}
          imageStyle={styles.imageBackground}
        >
          <SafeAreaView style={styles.rootscreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootscreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
