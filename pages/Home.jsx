import React, {useState} from 'react';
import { View } from 'react-native';
import Navbar from '../components/Navbar';
const Home = ({ navigation }) => {
  const [value, setValue] = useState('');
  const handleSearch = () => {
    console.log('press')
  }
  return (
    <View>
      <Navbar value={value} setValue={setValue} onSearch={handleSearch}/> 
    </View>
  );
};

export default Home;
