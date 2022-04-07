import React from 'react';
import {View, TextInput, StyleSheet, Text, Platform, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native';
import OldWavePic from '../assets/oldwave-logo-horizontal.png';
const Navbar = ({ value, setValue, onSearch}) => (
  <View>
    <View style={{marginTop: Platform.OS=='web' ? 0 : 25, paddingVertical:20, display:'flex', flexDirection:'row', width: '100%'}}>
      <View style={{width: '5%', display:'flex', justifyContent:'center', alignItems:'center', marginLeft: 20}}>
        <Icon onPress={onSearch} name="bars" size={30} color="#772CE8"/>
      </View>
      <View style={{width: '70%'}}>
        <Image source={OldWavePic} style={{width: 200,height: 50}}/>
      </View>
      <View style={{width: '20%',  display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
        <Icon onPress={onSearch} name="user" size={30} color="#772CE8" style={{marginRight:20}}/>
        <Icon onPress={onSearch} name="shopping-basket" size={30} color="#772CE8" style={{marginRight:20}}/>
      </View>

      </View>
    <View style={styles.search}>
      <TouchableWithoutFeedback onPress={onSearch}>
        <View style={styles.searchIcon}>
          <Icon onPress={onSearch} name="search" size={20} color="#772CE8"/>
        </View>
      </TouchableWithoutFeedback>
      <TextInput
        style={styles.searchBox}
        value={value}
        placeholder='Estoy buscando...' 
        placeholderTextColor='#666'
        onChangeText={ value => setValue(value)}
        onKeyPress={(key)=> {
          if(key.code === 'Enter'){
            onSearch()
          }
        }}
        />
    </View>
  </View>
);

const styles = StyleSheet.create({
  search: {
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#772CE8",
    marginTop: 0,
  },
  searchIcon: {
    borderRadius: 0,
    backgroundColor: '#fff',
    height: 40,
    paddingLeft: 5,
    paddingRight: 2,
    borderLeftColor: '#ccc',
    borderRightColor: '#fff',
    borderRightWidth: 1,
    borderLeftWidth: 0,
    borderTopLeftRadius:15, 
    borderBottomLeftRadius: 15,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },    
  searchBox: {
    width: 300,
    height: 40,
    marginVertical: 3,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRightColor: '#ccc',
    borderLeftColor: '#fff',
    borderRightWidth: 0,
    borderLeftWidth: 1,
    borderTopRightRadius:15, 
    borderBottomRightRadius: 15, 
    fontSize: 16,
  },
});

export default Navbar;
