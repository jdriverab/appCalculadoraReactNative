import React from 'react'
import {SafeAreaView,StatusBar} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"}/>

      <MainScreen/>
      
    </SafeAreaView>
  )
}

export default App
