import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../pages/Details';

import Home from '../pages/Home';
import Results from '../pages/Results';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Details' screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="Home"
            component={Home}
          />
        <Stack.Screen 
          name="Results"
          component={Results}
          />
          <Stack.Screen 
          name="Details"
          component={Details}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  Navigation
