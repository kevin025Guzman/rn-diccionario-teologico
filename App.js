import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from './src/screens/HomePage'
import Words from './src/screens/Words'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: "Diccionario Teologico" }}
        />
        <Stack.Screen
          name="Words"
          component={Words}
          options={{ title: "Diccionario Teologico" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;