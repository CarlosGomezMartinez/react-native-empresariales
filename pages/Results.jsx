import React, {useEffect, useState} from 'react';
import { View, Text} from 'react-native';
import { FlatList } from "react-native-web";
import Navbar from '../components/Navbar';
import Cardview from '../components/Cardview';
import { getProduct } from '../services/Service';


const Results = ({ navigation, route }) => {  
  
  const [value, setValue] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    if(route.params.search){
      search(route.params.search)
    }
  }, [])

  const handleSearch = () => {
    if(value){ 
      search(value)
    }
  }
  const search = async (name)=> {
    const res = await getProduct({name , page:1, size:5})
    if (res && res.data && res.status == 200) {
      setProducts(res.data.items)
    }
  }

  
  return (
    <View>
      <Navbar value={value} setValue={setValue} onSearch={handleSearch()}/>
      <FlatList
            data= { products }
            keyExtractor= {(item) => item.product_code}
            renderItem= { (item, index)=>
            <Cardview item = {item} navigation={navigation}/>            
            }                
            numColumns={4}
            />
    </View>
  );
};

export default Results;
