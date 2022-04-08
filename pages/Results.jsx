import React, {useEffect, useState} from 'react';
import { View, ScrollView} from 'react-native';
import { FlatList } from "react-native";
import Navbar from '../components/Navbar';
import Cardview from '../components/Cardview';
import { getProduct } from '../services/Service';
import Footer from '../components/Footer';


const Results = ({ navigation, route }) => {

  const [value, setValue] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(route.params.search){
      search(route.params.search)
    }
  }, [])

  const handleSearch = () => {
    if(value){
      search(value)
    }
  }
  const search = async (name) => {
    const res = await getProduct({ name, page: 1, size: 5 })
    if (res && res.data && res.status == 200) {
      setProducts(res.data.items)
    }
  }

  return (

    <View style={{flex:1}}>
      <Navbar value={value} setValue={setValue} onSearch={handleSearch} />
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <FlatList style={{marginVertical:30, paddingVertical:10}}
            nestedScrollEnabled={true}
            data={products}
            keyExtractor={(item) => item.product_code}
            renderItem={(item, index) =>
              <Cardview item={item.item} navigation={navigation} />
            }
            numColumns={1}
          />         
        </View>
        <Footer/>
        </ScrollView>  

    </View>
  );
};

export default Results;
