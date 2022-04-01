import React from 'react';
import { Button} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Results')
      }
    />
  );
};

export default Home;
