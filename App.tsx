import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on !</Text>
      <Text>{count}</Text>
      <StatusBar style="auto" />
      <Button title='TESTBTN' onPress={() => setCount(count + 1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
