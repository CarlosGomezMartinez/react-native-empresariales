import React from "react";
import { View, ScrollView, StyleSheet} from "react-native";
import { Text, Card, Button } from "react-native-elements";
import NumberFormat from "react-number-format";

const Cardview = ({item, showInfo = true, navigation}) => {
  return (
    <ScrollView>
    <View style={styles.containerCard}>      
      <Card containerStyle={{borderRadius:8, borderWidth: 1, borderColor: '#E2E2E2', borderStyle:'solid', width: '65%', height:335, opacity:1, elevation:5}}>         
        <Card.Image       
          style = {{resizeMode: 'contain', width:'100%', padding:0}}
          source={{
            uri: item.thumbnail,
          }}
        />
        <Card.Divider style={{marginTop:10}} />        

        {showInfo && (
        <>
          <Text style={{margin: 0, textAlign: "center", fontFamily:'poppins-medium', fontSize: 13}}>{item.name}</Text>
          <Text style={{color: '#772CE8', textAlign: "center", fontFamily:'poppins-semibold', fontSize: 11,}}>{item.brand}</Text>
          <Text style={{textAlign: "center", fontFamily:'poppins-medium', fontSize: 12}}>{item.city}</Text> 
          <View style={styles.price}>       
          <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'}></NumberFormat>
          </View>
          <Text style={{textAlign: "center", fontFamily:'poppins-medium', fontSize: 12}}>{item.rating}</Text>

          <Button    
            titleStyle={{fontFamily:'poppins-bold', fontSize: 12, textAlign: 'left', letterSpacing:0}}        
            buttonStyle={{borderRadius: 31, backgroundColor: '#772CE8', padding:1, opacity:1}}
            title="Ver detalles"
            type="solid"
           onPress={()=> navigation.navigate("Details", {code: item.product_code})} 
          />
        </>
        )}
      </Card>      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerCard:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'    
  },

  price: {
    fontFamily:'poppins-medium', fontSize: 12, textAlign: "center"
  }  
});

export default Cardview;