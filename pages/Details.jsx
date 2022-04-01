import React,  {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    TouchableOpacity
  } from 'react-native';
import Card from 'react-native-elements'
import Navbar from '../components/Navbar';

  const Details = ({ navigation, route }) =>{
    return (
      <View >
          
          <Navbar></Navbar>
          <Card>
          <Text>Hola Detalles:</Text>
          <Image></Image>
          <Text>Title:</Text>
          <Text>Price COP:</Text>   
          <Text>Description:</Text>
          </Card>
             
        </View >)
    
  }

  export default Details;
