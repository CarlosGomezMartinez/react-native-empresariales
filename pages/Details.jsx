import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import DetailsCard from "../components/DetailsCard";
import Navbar from "../components/Navbar";
import { getProductById } from "../services/Service";

const Details = ({route}) => {

  const [product, setProduct] = useState({});

  useEffect( async ()=>{
    // if(route.params?.code){
    //   const res = await getProductById(5)
    //   if (res && res.data && res.status == 200){
    //     setProduct(res.data.items)
    //   }
    // }  
  }, []) 

  return (
    <View style={style.container}>
      <Navbar />
      <Card>
        <Card.Title>Detalle del producto</Card.Title>
        <View>
          <DetailsCard images={product.images} />
        </View>
        <View>
          <Text>Nombre: {product.name}</Text>
          <Text>Marca: {product.brand}</Text>
          <Text>Ciudad: {product.city}</Text>
          <Text>Precio: {product.price} COP</Text>
          <Text>Vendedor: {product.reseller}</Text>
          <Text>Descripcion: {product.description}</Text>
          <Text>Valoracion: {product.rating}</Text>
        </View>
        <View style={style.card_button}>
          <Button
            buttonStyle={StyleSheet.card_button}
            title="Agregar al carrito"
          />
        </View>
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#888",
  },
  card_button: {
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
});

export default Details;