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
          <Text style={StyleSheet.card_text}>{item.name}</Text>
          <Text style={StyleSheet.card_text}>{item.brand}</Text>
          <Text style={StyleSheet.card_text}>{item.city}</Text>
          <Text style={StyleSheet.card_text}>{item.rating}</Text>
          <Text style={StyleSheet.card_text}>{item.price}</Text>

          <Button            
            buttonStyle={StyleSheet.card_button}
            title="Ver"
            //onPress={navigation.navigate("Results")} -> cambiar por el nombre del componente de detalles card
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
        marginBottom: 10
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
