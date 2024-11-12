import {  Button, Text, View, Image } from 'react-native';
import { cards } from '../../cards.json';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { globalStyles } from '../styles/styles';


const CardsScreen = () => {
    const {placeHolderImage} = "https://my.spline.design/molang3dcopy-bbc8e86c589a6ed39baeafe42915d6ea/";
    const navigation = useNavigation();
    const route = useRoute();
    
    const [players, setPlayers] = useState (route.params?.players || []);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [card, setCard] = useState(null);

    const hadlePress = () => {
        navigation.navigate('PodiumScreen')
    }

    // const hadleNextPlayer = () => {
    //     setCurrentPlayerIndex((prevIndex + 1 ) * keys.length); 
    // }

    const getRandomCard = () => {
        const keys = Object.keys(cards);
        const ramdomKey = keys[Math.floor(Math.random() * keys.length)];
        setCard(cards[ramdomKey]);
        setCurrentPlayerIndex( (prevIndex) => (prevIndex + 1 )% keys.length); 
    };

    useEffect(() => {
        getRandomCard();
    }, []);
    console.log(card);
    console.log(setPlayers);
    console.log(card);
    return(
        <View>
            {card ? (
                <>
                    <Text>{card.type}</Text>
                    <Text>{card.title}</Text>
                    <Text>{players[currentPlayerIndex]}</Text>
                    <Text>{card.description}</Text>
                    <Text>{card.instructions}</Text>
                    {card.image ? (
                        <View style= {
                            {
                                width: '100%',
                                height: 300, 
                                marginVertical: 10,
                            }
                        }>
                            <WebView
                            // originWhitelist={['*']}
                            source={{uri: card.image}}
                            // resizeMode="cover"
                            />
                        </View>
                    ) : (
                        <Text>No hay imagen disponible para esta carta.</Text>
                    )}
                    <Button title="Otra carta" onPress={getRandomCard} />
                    <Text>Tarjetas en juego</Text>
                </>
            ): (
                <Text>Cargando...</Text>
            )}
            <Button title='>' onPress={hadlePress}/>
        </View>
        
    )

}
export default CardsScreen;