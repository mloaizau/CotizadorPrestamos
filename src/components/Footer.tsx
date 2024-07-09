import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors';

export const Footer = (props: { calcular: any; }) => {

    const {calcular} = props;

    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={calcular}>
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PRYMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.SNOW_COLOR,
        textAlign: "center"
    },
    button: {
        backgroundColor: colors.PRYMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: "75%"
    }
});