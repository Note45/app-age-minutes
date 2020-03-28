import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputDate() {
  const [value, onChangeText] = React.useState('Enter your birth date');

  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity style={styles.buttonCalcule}>
        <Text style={styles.textCalcule}>CALCULE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 13,
    borderColor: '#22D1EE',
  },
  buttonCalcule: {
    backgroundColor: '#22D1EE',
    borderRadius: 13,
    paddingTop: 4,
    marginTop: 10,
    height: 40,
    width: 300
  },
  textCalcule: {
    alignSelf: 'center',
    fontWeight: '400',
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 10
  }
})