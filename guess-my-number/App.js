import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'



SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  })


  // Use useEffect to hide the SplashScreen when your app is ready
  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        // Hide the SplashScreen when fonts are loaded and your app is ready
        await SplashScreen.hideAsync();
      }
    };
    hideSplashScreen();
  }, [fontsLoaded]);


  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  const gameOverHandler = () => {
    setGameIsOver(true)
  }

  const startNewGameHandler = () => {
    setUserNumber(null)
    setGuessRounds(0)
  }

  let currentScreen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />

  if (userNumber) {
    currentScreen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    currentScreen = <GameOverScreen
      userNumber={userNumber}
      roundsNumber={guessRounds}
      onStartNewGame={startNewGameHandler}
    />
  }

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.accent500]}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {currentScreen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({

  rootScreen: {
    flex: 1,
  },

  backGroundImage: {
    opacity: 0.2
  },

});
