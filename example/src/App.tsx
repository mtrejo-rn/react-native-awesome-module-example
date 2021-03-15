import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { RedContainer } from 'react-native-awesome-module-example';

export default function App() {
  return (
    <View style={styles.container}>
      <RedContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
