import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function OutMinutes({ navigation }) {
  function getAge(dateBorne) {
    return ((new Date()).getTime() - dateBorne.getTime())/1000/60/60/23.9344/365.25
  }
 
  return(
    <View style={styles.container}>
      <Text style={styles.ageText}>{
        getAge(navigation.state.params.ageInMinutes)}
      </Text>
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
    fontSize: 25,
    fontWeight: 'bold',
  }
}) 