import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import colors from "../utils/colors";
import { StyleSheet, TextInput, View } from 'react-native';

export const Forms = () => {

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput placeholder='Cantidad a pedir' keyboardType='numeric' style={styles.input}></TextInput>
                <TextInput placeholder='Interés %' keyboardType='numeric' style={[styles.input, styles.inputPercentage]}></TextInput>
            </View>
            <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: -90,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRYMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center"
    },
    viewInputs: {
        flexDirection: "row",

    },
    input: {
        height: 50,
        backgroundColor: colors.SNOW_COLOR,
        borderWidth: 1,
        borderColor: colors.PRYMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20
    },
    inputPercentage: {
        width: "40%",
        marginLeft: 5
    }
});