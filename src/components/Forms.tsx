import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import colors from "../utils/colors";
import { StyleSheet, TextInput, View } from 'react-native';

export const Forms = (props: { setCapital: any; setInteres: any; setMeses: any; }) => {

    const { setCapital, setInteres, setMeses } = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput 
                    placeholder='Cantidad a pedir' 
                    keyboardType='numeric' 
                    style={styles.input}
                    onChange={e => setCapital(e.nativeEvent.text)}
                ></TextInput>
                <TextInput 
                    placeholder='Interés %' 
                    keyboardType='numeric' 
                    style={[styles.input, styles.inputPercentage]}
                    onChange={e => setInteres(e.nativeEvent.text)}
                ></TextInput>
            </View>
            <RNPickerSelect 
                placeholder={{label:"Selecciona el plazo...", value: null}}
                style={pickerSelectStyle}
                onValueChange={(value) => setMeses(value)}
                items={[
                    { label: '3 meses', value: 3 },
                    { label: '6 meses', value: 6 },
                    { label: '12 meses', value: 12 },
                    { label: '24 meses', value: 24 },
                ]}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: 0,
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

const pickerSelectStyle = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: colors.GRAY_COLOR,
        borderRadius: 4,
        color: "#000",
        paddingRight: 30,
        backgroundColor: colors.SNOW_COLOR,
        marginLeft: -5,
        marginRight: -5
    },
    inputAndroid: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: colors.GRAY_COLOR,
        borderRadius: 8,
        color: "#000",
        paddingRight: 30,
        backgroundColor: colors.SNOW_COLOR,
    }
});