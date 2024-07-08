/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import colors from './src/utils/colors';
import { Forms } from './src/components/Forms';

function App(): React.JSX.Element {

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.sectionContainer}>
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Forms/>
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: 200,
    backgroundColor: colors.PRYMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center"
  },
  titleApp: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.SNOW_COLOR,
    marginTop: 15
  }
});

export default App;
