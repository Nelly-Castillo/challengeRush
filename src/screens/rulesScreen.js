import { Button, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const RulesScreen = () => {
    const  navigation = useNavigation();
    const hadlePress = () => {
        navigation.navigate('LoginScreen');
    };
    return(
        <View style={styles.container}>
            <div className='flex-row p-1'>
                <Text>El juego se lleva a cado por turnos. Un turno se divide en 3 etapas: </Text>
                <Text>Robar: </Text>
                <Text>Comienza tu turno </Text>
                <Text>Jugar: </Text>
                <Text>Lee la carta en voz alta y lleva a cabo las instrucciones</Text>
                <Text>Chupar:</Text>
                <Text>Los jugadores reciben sus shost, tragos y castigos</Text>
            </div>
            <TouchableOpacity onPress={hadlePress}>
                <Button title='Aceptar' onPress={hadlePress}></Button>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7e3f8f',
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: 'col'
    },
    text: {
        color: "#fff"
    }
});
export default RulesScreen;