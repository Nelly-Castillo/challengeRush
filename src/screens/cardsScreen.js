import {  Text, View, TouchableOpacity } from 'react-native';
import { cards } from '../../cards.json';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { globalStyles } from '../styles/styles';


const CardsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [card, setCard] = useState(null);
    const [usedCards, setUsedCards] = useState([]);

    const hadlePress = () => {
        navigation.navigate('PodiumScreen')
    }
    const getRandomCard = () => {
        const keys = Object.keys(cards);
        const unusedKeys = keys.filter(key => !usedCards.includes(key));
        if (unusedKeys.length === 0) {
            setUsedCards([]);  // Reinicia la lista de cartas usadas si todas ya se jugaron
            navigation.navigate('PodiumScreen')
            return;
        }
        const randomKey = unusedKeys[Math.floor(Math.random() * unusedKeys.length)];
        setCard(cards[randomKey]);
        setUsedCards([...usedCards, randomKey]);
    };

    useEffect(() => {
        getRandomCard();
    }, []);
    // console.log(card);
    // console.log(card);
    return(
        <View style={globalStyles.container}>
            {card ? (
                <>
                    <View style={{width:429, marginBottom: 150}}>
                        <View style= {{ padding: 15, backgroundColor: '#90EE90', height:50, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 16, textAlign: 'justify', color: '#493548'}}>{card.title}</Text>
                        </View>
                        <View style= {{ padding: 15, backgroundColor: '#FFFF99', height:50, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{fontSize: 16, textAlign: 'justify', color: '#493548'}}>{card.type}</Text>
                        </View>
                        {/* <Text style={globalStyles.text}>{players[currentPlayerIndex]}</Text> */}
                    </View>
                    {card.image ? (
                        <View style= {globalStyles.containerImage}>
                            <WebView
                            source={{uri: card.image}}
                            />
                        </View>
                    ) : (
                        <Text>No hay imagen disponible para esta carta.</Text>
                    )}
                    <View style={globalStyles.butoon}>
                        <Text style={globalStyles.text}>{card.description}</Text>
                        <Text style={globalStyles.text}>{card.instructions}</Text>
                    </View>
                    <TouchableOpacity style={globalStyles.customButton} onPress={getRandomCard}>
                        <Text style={globalStyles.buttonText} >Otra carta </Text>
                    </TouchableOpacity>
                </>
            ): (
                <Text>Cargando...</Text>
            )}
        </View>
        
    )

}
export default CardsScreen;