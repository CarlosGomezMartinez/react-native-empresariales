import React, {useState} from 'react';
import { View, Text} from 'react-native';
import Navbar from '../components/Navbar';
const Results = ({ navigation, route }) => {
  const [value, setValue] = useState('');
  const handleSearch = () => {
    console.log('press')
  }
  return (
    <View>
      <Navbar value={value} setValue={setValue} onSearch={handleSearch}/>
      <Text>This is the value to search: {route.params}</Text>
    </View>
  );
};

export default Results;
