import React from 'react';
import {
  FlatList,
  Platform,
  StyleSheet, View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './src/stacks/MainStack';

const App = () => {

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <MainStack />
      </SafeAreaProvider>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

});
export default App;