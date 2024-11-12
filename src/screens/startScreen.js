import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styles';


const StartScreen = () => {
    const  navigation = useNavigation();
    const hadlePress = () => {
        navigation.navigate('RulesScreen');
    };
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>Hora de jugar</Text>
            <TouchableOpacity onPress={hadlePress}>
                <Image
                    style={
                        {
                            width: 199,
                            height: 250,
                            margin: 15
                        }
                    }
                    source={require("../image/Group.png")}
                />
            </TouchableOpacity>
            <Text style={globalStyles.text}>Toca el vaso continuar...</Text>
            <StatusBar style="auto" />
        </View>
    );
}


export default StartScreen;