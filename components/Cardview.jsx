import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Button } from "react-native-elements";

const Cardview = ({item, showInfo = true}) => {
  return (
    <View>
      <Card>
        <Card.Image
          style={StyleSheet.card_image}
          source={{
            uri: item.thumbnail,
          }}
        />

        {showInfo && (
        <>
          <Text style={{marginVertical: 10, textAlign: "center"}}>{item.name}</Text>
          <Text style={{marginBottom: 10, color: '#772CE8', textAlign: "center"}}>{item.brand}</Text>
          <Text style={{textAlign: "center"}}>{item.city}</Text>
          <Text style={{textAlign: "center"}}>{item.rating}</Text>
          <Text style={{textAlign: "center", marginBottom: 10}}>{item.price}</Text>

          <Button            
            buttonStyle={{borderRadius: 10, backgroundColor: '#772CE8', fontWeight: 'bold'}}
            title="Ver detalles"
            type="solid"
           // onPress={navigation.navigate("Details", {code: item.product_code})} 
          />
        </>
        )}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    card_image:{
        padding: 0        
    },

    card_text: {
        marginBottom: 10,
        textAlign: "center"
    },
    card_icon:{
        marginRight: 10
    },
    card_button:{
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0
    }
});

export default Cardview;
