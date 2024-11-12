import {  TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { globalStyles } from '../styles/styles';
const RulesScreen = () => {
    const  navigation = useNavigation();
    const hadlePress = () => {
        navigation.navigate('LoginScreen');
    };
    return(
        <View style={globalStyles.container}>
                <View style={globalStyles.butoon}>
                    <Text style={globalStyles.title}>El juego</Text>
                    <Text style={globalStyles.text}>El juego se lleva a cado por turnos. Un turno se divide en 3 etapas: </Text>
                    <Text style={globalStyles.text}>Robar: Comienza tu turno </Text>
                    <Text style={globalStyles.text}>Jugar: Lee la carta en voz alta y lleva a cabo las instrucciones </Text>
                    <Text style={globalStyles.text}>Chupar: Los jugadores reciben sus shost, tragos y castigos</Text>
                </View>
                <View style={globalStyles.butoon}>
                    <Text style={globalStyles.title}>Tipos de tarjetas</Text>
                    <Text style={globalStyles.text}>Grupal: Donde participa toda la mesa y los perdedores beben </Text>
                    <Text style={globalStyles.text}>Ación: Permiten a los jugadores enviar y recibir shots y tragos directamente </Text>
                    <Text style={globalStyles.text}>Especial: Modifican el juego durante algunos turnos </Text>
                    <Text style={globalStyles.text}>Reación: Se explican antes de comenzar el juego, haciendo que los jugadores reaccionen inmediatemente ejecutando el movimiento que indica la carta </Text>
                </View>
            <TouchableOpacity style={globalStyles.customButton} onPress={hadlePress}>
                <Text style={globalStyles.buttonText} >Aceptar </Text>
            </TouchableOpacity>
        </View>
    )

}

export default RulesScreen;