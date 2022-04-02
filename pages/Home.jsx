import React, {useState} from 'react';
import { View, Text, ScrollView} from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = ({ navigation }) => {
  const [value, setValue] = useState('');
  const handleSearch = () => {
    if(value){
      navigation.navigate('Results', {search: value})
    }
  }
  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <Navbar value={value} setValue={setValue} onSearch={handleSearch}/>
      
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
        <View>
          <Text>Fisrt Section</Text>
        </View>
        <View>
          <Text>Que estas buscando hoy section</Text>
        </View>
        <View>
          <Text>long card</Text>
          <Text>2 short cards</Text>
        </View>
        <View>
          <Text>2 short cards</Text>
          <Text>long card</Text>
        </View>
        <View>
          <Text> Productos Recientes </Text>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Home;
