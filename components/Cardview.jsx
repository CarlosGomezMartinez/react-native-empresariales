import React from "react";
import { View} from "react-native";
import { Text, Card, Button } from "react-native-elements";

const Cardview = ({item, showInfo = true, navigation}) => {
  return (
    <View>      
      <Card containerStyle={{borderRadius:8, borderWidth: 1, borderColor: '#E2E2E2', borderStyle:'solid'}}>         
        <Card.Image
          style = {{width: '100%', height:200, resizeMode: 'center'}}
          source={{
            uri: item.thumbnail,
          }}
        />

        {showInfo && (
        <>
          <Text style={{marginVertical: 5, textAlign: "center", fontFamily:'poppins-medium', fontSize: 16}}>{item.name}</Text>
          <Text style={{color: '#772CE8', textAlign: "center", fontFamily:'poppins-semibold', fontSize: 15}}>{item.brand}</Text>
          <Text style={{textAlign: "center", fontFamily:'poppins-medium', fontSize: 16}}>{item.city}</Text>
          <Text style={{textAlign: "center", fontFamily:'poppins-medium', fontSize: 16}}>{item.rating}</Text>
          <Text style={{textAlign: "center", marginBottom: 10, fontFamily:'poppins-medium'}}>{item.price}</Text>

          <Button            
            buttonStyle={{borderRadius: 10, backgroundColor: '#772CE8', fontFamily:'poppins-bold', fontSize: 10}}
            title="Ver detalles"
            type="solid"
           onPress={()=> navigation.navigate("Details", {code: item.product_code})} 
          />
        </>
        )}
      </Card>      
    </View>
  );
}

export default Cardview;