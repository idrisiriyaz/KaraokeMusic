import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const ActivityScreen = () => {
    const [displayValue, setDisplayValue] = useState('');

    const handleButtonPress = (text) => {
        setDisplayValue((prevValue) => prevValue + text);
    };

    const calculateFraction = () => {
        try {
            // Assuming input format: "numerator/denominator"
            const [numerator, denominator] = displayValue.split('/').map(Number);
            const result = numerator / denominator;
            setDisplayValue(result.toString());
        } catch (error) {
            // Handle invalid input
            setDisplayValue('Error');
        }
    };

    const clearDisplay = () => {
        setDisplayValue('');
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={displayValue} editable={false} />

            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={calculateFraction}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={clearDisplay}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        fontSize: 28,
        width: '80%',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        margin: 5,
        borderRadius: 10,
        width: 80,
        height: 80,
    },
    buttonText: {
        fontSize: 28,
    },
});

export default ActivityScreen;
