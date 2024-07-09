import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors';

export const Resultado = (props: { capital: any; interes: any; meses: any; total: any; errorMessage: any; }) => {

    const {capital, interes, meses, total, errorMessage} = props;

    return (
        <View style={styles.container}>
            { total && (
                <Text>Resultado Total:</Text>
            )}
            <View>
                <Text style={styles.error}>{ errorMessage }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 40
    },
    error: {
        textAlign: "center",
        color: colors.DANGER_COLOR,
        fontWeight: "bold",
        fontSize: 20
    }
})