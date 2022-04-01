import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from '../components/Navbar';
import Navigation from '../navigation/Navigation';
// import Footer from '../components/Footer'

const PublicLayout = () => {
  const [value, setValue] = useState('');
  const [onSearch, setOnSearch] = useState('');
  const handleSearch = () => {
    setOnSearch(value)
  }

  return (
  <View>
    <Navbar value={value} setValue={setValue} onSearch={handleSearch}/> 
    <NavigationContainer>
      <Navigation onSearch={onSearch}/>
    </NavigationContainer>
    {/* <Footer /> */}
  </View>
)};

export default PublicLayout;
