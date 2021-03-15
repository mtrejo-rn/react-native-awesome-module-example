import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RedContainer = () => {
  return (
    <View style={styles.container}>
      <Text> Red Container</Text>
    </View>
  );
};

export default RedContainer;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
