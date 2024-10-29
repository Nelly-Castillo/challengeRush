import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';


const StartScreen = () => {
    const  navigation = useNavigation();
    const hadlePress = () => {
        navigation.navigate('RulesScreen');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hora de jugar</Text>
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
            <Text style={styles.text}>Toca el vaso continuar...</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7e3f8f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#fff"
    }
});

export default StartScreen;