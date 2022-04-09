import React, {useEffect, useState} from 'react';
import { View, ScrollView, Text} from 'react-native';
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
    let searchProducts = []
    const res = await getProduct({ name, page: 1, size: 5 })
    if(res){
      searchProducts = res.reduce((curr, next)=> {
        return next && next.data && next.status == 200 ? curr.concat(next.data.items) : curr
      }, [])
    }
    setProducts(searchProducts)
    
  }

  return (

    <View style={{flex:1}}>
      <Navbar value={value} setValue={setValue} onSearch={handleSearch} />
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', display:'flex', justifyContent:'center'}}>
          <View style={{marginVertical:30, paddingVertical:10}}>
            {products.length > 0 && products.map((product, index)=> {
              return  <Cardview key={product.product_code+index} item={product} navigation={navigation} />
            })}

            {products && products.length === 0 && (
              <Text>NO SE ENCONTRARON RESULTADOS</Text>
            )}
          </View>
        </View>
        <Footer/>
        </ScrollView>  

    </View>
  );
};

export default Results;