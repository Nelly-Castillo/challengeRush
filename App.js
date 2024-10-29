import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  StartScreen  from "./src/screens/StartScreen";
import RulesScreen from "./src/screens/rulesScreen"
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./src/screens/loginScreen"
import CardsScreen from "./src/screens/cardsScreen"
import PodiumScreen from "./src/screens/podiumScreen"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartScreen'>
        <Stack.Screen name= "StartScreen" component={StartScreen}/>
        <Stack.Screen name='RulesScreen' component={RulesScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name= 'CardsScreen' component={CardsScreen}/>
        <Stack.Screen name= 'PodiumScreen' component={PodiumScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


