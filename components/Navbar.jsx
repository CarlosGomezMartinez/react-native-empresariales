import React from 'react';
import {View, TextInput, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-web';

const Navbar = ({value, setValue, onSearch}) => (
  <>
    <View style={styles.firstHeader}>
      <Text>OLDWave Logo here</Text>
    </View>
    <View style={styles.search}>
      <TouchableWithoutFeedback onPress={onSearch}>
        <Icon onPress={onSearch} style={styles.searchIcon} name="search" size={20} color="#772CE8"/>
      </TouchableWithoutFeedback>
      <TextInput
        style={styles.searchBox}
        value={value} 
        placeholder='Estoy buscando...' 
        placeholderTextColor='#666'
        onChangeText={ value => setValue(value)}
        />
    </View>
  </>
);

const styles = StyleSheet.create({

  search: {
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#772CE8",
  },
  searchIcon: {
    borderRadius: 0,
    backgroundColor: '#fff',
    height: 40,
    paddingLeft: '0.75rem',
    paddingRight: 2,
    borderLeftColor: '#ccc',
    borderRightColor: '#fff',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius:15, 
    borderBottomLeftRadius: 15,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },    
  searchBox: {
    width: 300,
    height: 40,
    marginVertical: '1rem',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRightColor: '#ccc',
    borderLeftColor: '#fff',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopRightRadius:15, 
    borderBottomRightRadius: 15, 
    fontSize: 16,
    outlineColor: 'transparent',
    outlineStyle: 'none'
  }
});

export default Navbar;
