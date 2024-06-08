import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from "screens/MenuScreen.tsx";
import QRScreen from "screens/QRScreen.tsx";
import HomeScreen from "screens/HomeScreen.tsx";
import SignUpScreen from 'screens/SingupScreen.tsx';
import LoginScreen from 'screens/LoginScreen.tsx';
import {TableProvider} from "viewModels/TableContext.tsx";

const Stack = createNativeStackNavigator();

function App() {
    return (
          <NavigationContainer>
              <TableProvider>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                        contentStyle:{
                            backgroundColor:'#F8F8F8',
                        }
                    }}
                >
                  <Stack.Screen name="QR" component={QRScreen} />
                  <Stack.Screen name="Menu" component={MenuScreen} />
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="SingUp" component={SignUpScreen} />
                </Stack.Navigator>
              </TableProvider>
          </NavigationContainer>
  );
}

export default App;