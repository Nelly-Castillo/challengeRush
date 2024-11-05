import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  StartScreen  from "./src/screens/startScreen";
import RulesScreen from "./src/screens/rulesScreen"
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./src/screens/loginScreen"
import CardsScreen from "./src/screens/cardsScreen"
import PodiumScreen from "./src/screens/podiumScreen"
import { View, StyleSheet } from 'react-native';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='StartScreen'>
            <Stack.Screen name= "StartScreen" component={StartScreen}/>
            <Stack.Screen name='RulesScreen' component={RulesScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name= 'CardsScreen' component={CardsScreen}/>
            <Stack.Screen name= 'PodiumScreen' component={PodiumScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#7e3f8f',
      justifyContent: 'start',
      color: "#fff"
  },
});


