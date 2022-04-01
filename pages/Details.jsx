import React,  {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    TouchableOpacity
  } from 'react-native';

  const Details = ({ navigation, route }) =>{
    return <Text>Hola Detalles: {route.params}</Text>;
  }

  export default Details;