import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from "screens/MenuScreen.tsx";
import HomeScreen from "screens/HomeScreen.tsx";

const Stack = createNativeStackNavigator();

function App() {
    return (
          <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Menu"
                screenOptions={{
                    headerShown: false,
                    contentStyle:{
                        backgroundColor:'#F8F8F8'
                    }
                }}
            >
              <Stack.Screen name="Menu" component={MenuScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App;