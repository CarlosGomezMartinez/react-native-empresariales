import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublicLayout from './layout/public-layout'
import { View } from 'react-native-web';

const Stack = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const App = () => {
  return (
    <>
      <View>
        NAVBAR HERE
      </View>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //           name="/"
    //           component={PublicLayout}
    //         />
    //     {/* <Route path='/' element={}>
    //       <Route path='' element={<Home />} />
    //       <Route path='about' element={<About />} />
    //       <Route path='career' element={<Career />} />
    //     </Route> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default  App
