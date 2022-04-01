import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

class Cardview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Card>
          <Card.Title>HELLO WORD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={StyleSheet.card_image}
            source={{
              uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
            }}
          />
          <Text style={StyleSheet.card_text}>texto de prueba ...</Text>
          <Button
            icon={
              <Icon name="code" color="#ffffff" iconStyle={ StyleSheet.card_icon}/>
            }
            buttonStyle={StyleSheet.card_button}
            title="Agregar al carrito"
          />
        </Card>
      </View>
    );
  }
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
