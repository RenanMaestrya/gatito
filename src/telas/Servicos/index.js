import React from "react";

import { FlatList } from 'react-native';

import Item from "./Item";

import estilosGlobal from '../../estilos';

const servicos = [
    {
        id: 1, 
        nome: "Tomate",
        preco: 1.9 ,
    },
    {
        id: 2,
        nome: "Carne",
        preco: 12.9,
        
    },
    {
        id: 3,
        nome: "Queijo",
        preco: 9.9,
        
    }
]

export default function Servicos(){
    return <>
        <FlatList
            data={servicos}
            renderItem={({item}) => <Item {...item}/>}
            keyExtractor={({id}) => String(id)}
        />
    </>
}