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
            <Text>Tipo de tarjeta: { card.type}</Text>
            <Text>Titulo:{card.title}</Text>
            <Text>Nombre jugador:</Text>
            <Text>{card.description}</Text>
            <Text>{card.instructions}</Text>
            <Text>Tarjetas en juego</Text>
            <Button title='>' onPress={hadlePress}/>
        </View>
        
    )

}
export default CardsScreen;