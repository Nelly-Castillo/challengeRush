import {  Button, Text, View } from 'react-native';
import {cards} from '../../cards.json';
import { useNavigation } from '@react-navigation/native';
const card = cards["1"];
const CardsScreen = () => {
    const navigation = useNavigation();
    const hadlePress = () => {
        navigation.navigate('PodiumScreen')
    }
    console.log(card);
    return(
        <View>
            <Text>Tipo de tarjeta</Text>
            <Text>Nombre jugador</Text>
            <Text>Aqui va las indicaciones</Text>
            <Text>Tarjetas en juego</Text>
            <Button title='>' onPress={hadlePress}/>
        </View>
        
    )

}
export default CardsScreen;