import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { globalStyles } from './src/styles/styles';

import  StartScreen  from "./src/screens/startScreen";
import RulesScreen from "./src/screens/rulesScreen"
import LoginScreen from "./src/screens/loginScreen"
import CardsScreen from "./src/screens/cardsScreen"
import PodiumScreen from "./src/screens/podiumScreen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={globalStyles.containerMain}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='StartScreen' screenOptions={{headerShown: false}}>
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


