import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import InputDate from '../components/InputDate'

export default function Main() {
  return(
    <View style={styles.container}>
      <InputDate />
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