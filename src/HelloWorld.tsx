// src/HelloWorld.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HelloWorldProps {
  message?: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ message = 'Hello World' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});