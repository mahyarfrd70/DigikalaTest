import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';

function Input({label, value, onChange, placeholder, name}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.defaultInputStyle}
        placeholder={placeholder}
        onChangeText={(e) => onChange(name, e)}
        value={value}
      />
    </View>
  );
}

export default Input;
