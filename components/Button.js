import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MyButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={globalStyles.button} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </Pressable>
  );
}

