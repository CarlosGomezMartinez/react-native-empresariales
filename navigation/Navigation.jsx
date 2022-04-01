import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Home from '../pages/Home';
import Results from '../pages/Results';

const Stack = createNativeStackNavigator();

const Navigation = ({onSearch}) => {
  const navigation = useNavigation()
  useEffect(() => {
    if(onSearch) {
      navigation.navigate('Results', onSearch )
    }
  }, [onSearch]);

  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="Home"
          component={Home}
        />
      <Stack.Screen name="Results" component={Results} />
   </Stack.Navigator>
  );
}

export default  Navigation
