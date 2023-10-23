/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './stores/redux/store';
import { Home } from './screens';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Provider store={store}>
          <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerBackVisible: false,
            headerShown: false,
          }}>
            <Stack.Screen
              name="Home"
              component={Home}
            />
          </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
