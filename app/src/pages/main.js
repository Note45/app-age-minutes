import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Main() {
  return(
    <View style={styles.container}>
      <Text>Aplication Start</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});