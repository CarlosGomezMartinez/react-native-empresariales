import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import Home from '../pages/Home';
import Results from '../pages/Results';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="Home"
            component={Home}
          />
        <Stack.Screen 
          name="Results"
          component={Results}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  Navigation
