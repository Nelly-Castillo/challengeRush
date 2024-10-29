import { Button, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  Text } from 'react-native';
const RulesScreen = () => {
    const  navigation = useNavigation();
    const hadlePress = () => {
        navigation.navigate('LoginScreen');
    };
    return(
        <View>
            <Text>Hola</Text>
            <TouchableOpacity onPress={hadlePress}>
                <Button title='Aceptar' onPress={hadlePress}></Button>
            </TouchableOpacity>
        </View>
    )

}
export default RulesScreen;