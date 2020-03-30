import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function OutMinutes({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.ageText}>{navigation.state.params.ageInMinutes}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2F3F5',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
  },
  ageText: {
    fontSize: 90,
    fontWeight: "bold"
  }
}) 