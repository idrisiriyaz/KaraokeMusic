import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const FormScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        const formData = {
            name: name,
            email: email,
        };

        axios
            .post('https://example.com/submit', formData)
            .then(response => {
                console.log(response.data);
                Alert.alert('Success', 'Form submitted successfully!');
            })
            .catch(error => {
                console.error(error);
                Alert.alert('Error', 'Failed to submit the form.');
            });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#888"
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
        backgroundColor: '#f5f5f5',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        color: '#333',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#fda938',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default FormScreen;
