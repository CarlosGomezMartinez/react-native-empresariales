import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Cardview from '../components/Cardview';

const Home = ({ navigation }) => {
  const [value, setValue] = useState('');
  const handleSearch = () => {
    if(value){
      navigation.navigate('Results', {search: value})
    }
  }
  const items =  [
    {
      product_code: "1",
      name: "iPhone 13 128 GB",
      brand: "Apple",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/oldwave-fastapi-backend.appspot.com/o/product_thumbnails%2Fimage_2022-03-19_000715.png?alt=media&token=f9fd4202-a384-440f-9ae4-1c1ac2dba837",
      city: "Medellin",
      price: 70000,
      seller: "Ernesto Perez Frailejón Dev",
      rating: 5,
      search_quantity: 653
    },
    {
      product_code: "2",
      name: "Apple iPhone 12 (128 GB) - Azul",
      brand: "Apple",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/oldwave-fastapi-backend.appspot.com/o/product_thumbnails%2Fimage_2022-03-20_115304.png?alt=media&token=76b00a86-c0e8-43cd-a6c1-cfec30087c67",
      city: "Medellin",
      price: 70000,
      seller: "Ernesto Perez Frailejón Dev",
      rating: 5,
      search_quantity: 89
    },
  ]
  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <Navbar value={value} setValue={setValue} onSearch={handleSearch}/>
      
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
        <View style={styles.container}>
          <Text style={styles.titles}>¿Qué estás buscando hoy?</Text>
          <Cardview item={items[0]} showInfo={false} navigation={navigation}/>  
        </View>
        {/* <View>
          <Text>long card</Text>
          <Text>2 short cards</Text>
        </View>
        <View>
          <Text>2 short cards</Text>
          <Text>long card</Text>
        </View> */}
        <View style={styles.container}>
          <Text style={styles.titles}> Productos Recientes </Text>
          <Cardview item={items[1]} showInfo={false} navigation={navigation}/>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center'
  },
  titles: {
    textAlign:'center',
    color: '#772CE8',
    fontSize: 18
  }
})

export default Home;
