import { Text, View, TouchableOpacity, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/styles';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [count, setCount] = useState(0);
    const [inputs, setInputs] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const increase = () => {
        setCount(count + 1);
        setInputs([...inputs, '']); 
        setErrorMessage('');
    };

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
            setInputs(inputs.slice(0, -1)); 
            setErrorMessage('');
        }
    };

    const handleInputChange = (text, index) => {
        const newInputs = [...inputs];
        newInputs[index] = text;
        setInputs(newInputs);
        setErrorMessage('');
    };

    const handleSumit = () => {
        const allFilled = inputs.every(input => input.trim() !== "");
        if (allFilled) {
            navigation.navigate('CardsScreen', {players: inputs});
            setErrorMessage('');
            console.log(inputs);
        } else {
            setErrorMessage("Ingresa un nombre en todos los campos")
        }
        
    }

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Text style={globalStyles.text}>Numero de jugadores</Text>
            <View style={styles.counterContainer}>
                <TouchableOpacity style={styles.button} onPress={decrease}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    value={count.toString()}
                    editable={false} 
                    textAlign="center"
                />

                <TouchableOpacity style={styles.button} onPress={increase}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Text style={globalStyles.text}>Ingresa los nombres...</Text>
            {inputs.map((input, index) => (
                <TextInput
                    key={index}
                    style={styles.nameInput}
                    placeholder={`Jugador ${index + 1}`}
                    value={input}
                    onChangeText={(text) => handleInputChange(text, index)}
                />
            ))}

            {errorMessage ? (
                <Text style={styles.error}>{errorMessage}</Text>
            ) : null}

            <Button title='Enviar' onPress={handleSumit} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    button: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cccccc',
        marginHorizontal: 5,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        width: 50,
        height: 30,
        backgroundColor: '#f0f0f0',
        fontSize: 16,
        textAlign: 'center',
    },
    nameInput: {
        width: '80%',
        height: 40,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        marginTop: 10,
        fontSize: 14,
        marginBottom: 10,
    },
});

export default LoginScreen;
