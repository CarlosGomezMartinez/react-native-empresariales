import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, TouchableWithoutFeedback } from 'react-native';

const Footer = () => {
  return (
  <View>
    <View style={[styles.container, styles.benefits, styles.displayRow]}>
      <View style={styles.displayRow}>
        <View style={{marginRight:30} }>
          <View style={[styles.displayRow, {marginBottom: 10}]}>
            <Icon name="shopping-bag" size={20} color="#772CE8"/>
            <Text style={styles.marginLeft}>Compras Seguras</Text>
          </View>
          <View style={styles.displayRow}>
            <Icon name="trophy" size={20} color="#772CE8"/>
            <Text style={styles.marginLeft}>Calidad garantizada</Text>
          </View>
        </View>
        <View>
          <View style={[styles.displayRow, {marginBottom: 10}]}>
            <Icon name="credit-card" size={20} color="#772CE8"/>
            <Text style={styles.marginLeft}>Multiples medios de pago</Text>
          </View>
          <View style={styles.displayRow}>
            <Icon name="map-pin" size={20} color="#772CE8"/>
            <Text style={styles.marginLeft}>Envios a todo el pais</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={[styles.container, styles.displayRow, {backgroundColor: '#772CE8', paddingTop: 10}]}>
      <View>
        <Text style={{fontSize:18, color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>Suscríbete a nuestro boletín</Text>
        <Text style={{fontSize:14, color: '#fff', marginVertical: 5,  textAlign: 'center'}}>Recibe información de nuestras ofertas</Text>
        <TextInput
          style={styles.searchBox} 
          placeholder='Ingresa tu correo electrónico' 
          placeholderTextColor='#666'
        />
        <TouchableWithoutFeedback>
          <View style={{width: 300, backgroundColor: 'transparent', borderColor:'#fff' ,borderWidth: 2, borderRadius: 15,  height: 40, marginBottom:15}}>
            <Text style={{fontSize:14, color: '#fff', marginVertical: 5,  textAlign: 'center'}}>Suscribirme</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
    <View style={[styles.container, styles.displayRow, {marginVertical: 10}]}>
      <Text>Old wave © 2020 | Powered by: UdeA</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent: 'center'
  },
  displayRow: {
    flexDirection: 'row',
    display:'flex',
  },
  benefits:{
    backgroundColor: '#C7F3FD',
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  searchBox: {
    width: 300,
    height: 40,
    marginVertical: 15,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRightColor: '#ccc',
    borderLeftColor: '#fff',
    borderWidth: 1,
    borderRadius:15,
    borderColor:'#fff',
    borderBottomRightRadius: 15, 
    fontSize: 16,
  },
  marginLeft:{
    marginLeft: 10
  }
})

export default Footer;