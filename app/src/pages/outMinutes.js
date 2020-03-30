import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function OutMinutes({ navigation }) {
  function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
 
  return(
    <View style={styles.container}>
      <Text style={styles.ageText}>{
        getAge(navigation.state.params.ageInMinutes) * 525600}
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
    fontSize: 50,
    fontWeight: "bold",
  }
}) 