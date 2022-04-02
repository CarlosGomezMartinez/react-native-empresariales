import React, {useEffect, useState} from 'react';
import { View, Text} from 'react-native';
import { FlatList } from "react-native-web";
import Navbar from '../components/Navbar';
import Cardview from '../components/Cardview';
import { getProduct } from '../services/Service';


const Results = ({ navigation, route }) => {  
  
  const [value, setValue] = useState('');
  const [products, setProducts] = useState([]);

  useEffect( ()=>{
    async function loadProducts(){
      const res = await getProduct('Iphone',1,5)
    }    
    loadProducts()
  }, [])

  const handleSearch = () => {
    response = getProduct(route.params.search, 1, 5) 
    console.log(response)
  }

  
  return (
    <View>
      <Navbar value={value} setValue={setValue} onSearch={handleSearch()}/>
      <FlatList
            data= { response }
            keyExtractor= {(item) => item.id}
            renderItem= { (item, index)=>
            <Cardview item = {item}/>            
            }                
            numColumns={3}
            />
    </View>
  );
};

export default Results;
