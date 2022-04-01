import React from "react";
import { FlatList, SafeAreaView } from "react-native-web";
import Cardview from "../components/Cardview";

const ListCards = () => {
    const products = [
        {
            nombre: 'iPhone 12',
            color:'Blanco',
            id: '001',
        },
        {
            nombre: 'iPhone 13',
            color:'Space Grey',
            id: '002',
        },
        {
            nombre: 'Macbook Pro',
            color:'Plata',
            id: '003'
        },
        {
            nombre: 'Apple Watch',
            color:'Rosa',
            id: '004'
        }
    ]
    return(
        <SafeAreaView>
            <FlatList
            data= { products }
            keyExtractor= {(item) => item.id}
            renderItem= { (item, index)=>
            <Cardview item = {item}/>
            }                
            />
        </SafeAreaView>
    );

}

export default ListCards