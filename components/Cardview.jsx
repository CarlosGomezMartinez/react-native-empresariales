import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

class Cardview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Card>
          <Card.Image
            style={StyleSheet.card_image}
            source={{
              uri: this.props.item.item.thumbnail,
            }}
          />
          <Text style={StyleSheet.card_text}>{this.props.item.item.name}</Text>
          <Text style={StyleSheet.card_text}>{this.props.item.item.brand}</Text>
          <Text style={StyleSheet.card_text}>{this.props.item.item.city}</Text>
          <Text style={StyleSheet.card_text}>{this.props.item.item.rating}</Text>
          <Text style={StyleSheet.card_text}>{this.props.item.item.price}</Text>

          <Button            
            buttonStyle={StyleSheet.card_button}
            title="Ver"
            //onPress={this.props.navigation.navigate("Results")} -> cambiar por el nombre del componente de detalles card
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
