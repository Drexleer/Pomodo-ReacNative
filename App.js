import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';

export default function App() {

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Pomodoro</Text>
      <StatusBar style="auto" />
      <Header currentTime={currentTime} setCurrentTime={setCurrentTime} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
});
