import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import HomePage from "./src/screens/HomePage";
import Words from "./src/screens/Words";
import Description from "./src/screens/Description";

const Stack = createNativeStackNavigator();

export default function App() {

  
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: "Diccionario Teologico",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#101010',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Words"
          component={Words}
          options={{
            title: "Diccionario Teologico",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#101010',
            },
            headerTintColor: '#fff',
           
          }}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{
            title: "Descripcion",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#101010',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

