import React from 'react';
import { StyleSheet, View } from 'react-native';

import InputDate from '../components/InputDate'

export default function Main({ navigation }) {
  return(
    <View style={styles.container}>
      <InputDate navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2F3F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
})