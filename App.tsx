import React, { useState } from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import colors from './src/utils/colors';
import { Forms } from './src/components/Forms';
import { Footer } from './src/components/Footer';
import { Resultado } from './src/components/Resultado';

function App(): React.JSX.Element {

  const [capital, setCapital] = useState(0);
  const [interes, setInteres] = useState(0);
  const [meses, setMeses] = useState(0);
  const [total, setTotal] = useState({pagoMensual:'', pagoTotal:''});
  const [errorMessage, setErrorMessage] = useState('');

  const calcular = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!interes) {
      setErrorMessage('Añade el interés del préstamo');
    } else if (!meses) {
      setErrorMessage('Selecciona los meses a pagar');
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -meses )) / i);
      setTotal({
        pagoMensual: fee.toFixed(0),
        pagoTotal: (fee * meses).toFixed(0)
      })
      console.log(total);
    }
  }

  const reset = () => {
    setErrorMessage("");
    setTotal({pagoMensual:'', pagoTotal:''});
  }

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.sectionContainer}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Forms setCapital={setCapital} setInteres={setInteres} setMeses={setMeses} />
      </SafeAreaView>

      <Resultado capital={capital} interes={interes} meses={meses} total={total} errorMessage={errorMessage} />

      <Footer calcular={calcular}/>
    </>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: 290,
    alignItems: "center"
  },
  titleApp: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 15
  },
  background: {
    height: 200,
    width: "100%",
    backgroundColor: colors.PRYMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
    position: "absolute"
  }
});

export default App;
