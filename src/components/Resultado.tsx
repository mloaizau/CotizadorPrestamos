import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors';

export const Resultado = (props: { capital: any; interes: any; meses: any; total: any; errorMessage: any; }) => {

    const {capital, interes, meses, errorMessage} = props;
    const {pagoMensual, pagoTotal} = props.total;

    return (
        <View style={styles.container}>
            { pagoTotal && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>Resumen</Text>
                    <DataResult titulo='Cantidad solicitada:' valor={"$" + capital} />
                    <DataResult titulo='Interés %:' valor={interes + "%"} />
                    <DataResult titulo='Plazo:' valor={meses + " meses"} />
                    <DataResult titulo='Pago mensual:' valor={ "$" + pagoMensual} />
                    <DataResult titulo='Total a pagar:' valor={ "$" + pagoTotal} />
                </View>
            )}
            <View>
                <Text style={styles.error}>{ errorMessage }</Text>
            </View>
        </View>
    )
}

const DataResult = (props: { titulo: string; valor: any; }) => {
    const {titulo, valor} = props;

    return(
        <View style={ styles.valor }>
            <Text>{ titulo }</Text>
            <Text>{ valor }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40
    },
    boxResult: {
        padding: 30
    },
    error: {
        textAlign: "center",
        color: colors.DANGER_COLOR,
        fontWeight: "bold",
        fontSize: 20
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 30
    },
    valor: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    }
})