import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import DetailsCard from "../components/DetailsCard";
import Navbar from "../components/Navbar";
import { getProductById } from "../services/Service";

const Details = ({ route }) => {

  const [product, setProduct] = useState({});

  useEffect(async () => {
    if (route.params?.code) {
      const res = await getProductById(route.params?.code)
      if (res && res.data && res.status == 200) {
        setProduct(res.data)
      }
    }
  }, [])

  return (
    <View style={style.container}>
      <Navbar />
      <ScrollView style={style.container}>
        <Card containerStyle={{ borderRadius: 8, borderWidth: 1, borderColor: '#E2E2E2', borderStyle: 'solid' }}>
          <Card.Title style={{ color: '#772CE8', marginVertical: 5, textAlign: "center", fontFamily: 'poppins-medium', fontSize: 20 }}>Detalle del producto</Card.Title>
          <View >
            <DetailsCard images={product.images} />
          </View>
          <View>
            <Text style={{ marginVertical: 15, textAlign: "center", fontFamily: 'poppins-medium', fontSize: 16 }}>Nombre: {product.name}</Text>
            <Text style={{ color: '#772CE8', textAlign: "center", fontFamily: 'poppins-semibold', fontSize: 15 }}>Marca: {product.brand}</Text>
            <Text style={{ textAlign: "center", fontFamily: 'poppins-medium', fontSize: 16 }}>Ciudad: {product.city}</Text>
            <Text style={{ textAlign: "center", marginBottom: 10, fontFamily: 'poppins-medium' }}>Precio: {product.price} COP</Text>
            <Text style={{ textAlign: "center", marginBottom: 10, fontFamily: 'poppins-medium' }}>Vendedor: {product.reseller}</Text>
            <Text style={{ textAlign: "center", marginBottom: 10, fontFamily: 'poppins-medium' }}>Descripcion: {product.description}</Text>
            <Text style={{ textAlign: "center", fontFamily: 'poppins-medium', fontSize: 16 }}>Valoracion: {product.rating}</Text>
          </View>
          <View>
            <Button
              buttonStyle={{ borderRadius: 10, backgroundColor: '#772CE8', fontFamily: 'poppins-bold', fontSize: 10 }}
              title="Agregar al carrito"
            />
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#fff",
    flex: 1
  },
  card_button: {
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
});

export default Details;