import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function InputDate({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View >
      <Text style={styles.textTitle}>Enter your birth data:</Text>
      
      <TouchableOpacity style={styles.dateOut} onPress={showDatepicker}>
        <Text style={styles.textTitle}>{date.toDateString()}</Text>
      </TouchableOpacity>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <TouchableOpacity style={styles.buttonCalcule} onPress={() => {navigation.navigate('OutMinutes', { ageInMinutes: date } )}}>
        <Text style={styles.textCalcule}>CALCULE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 25,
    fontWeight: '400',
    margin: 10,
    padding: 10
  },
  dateOut: {
    borderColor: '#22D1EE',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
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
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10
  }
})