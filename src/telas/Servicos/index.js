import React from "react";

import { SafeAreaView, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

import Item from "./Item";

import estilosGlobal from '../../estilos';

const servicos = [
    {
        id: 1, 
        nome: "Banho",
        preco: 79.9 ,
        descricao: "NAO DE BANHO NO SEU GATO! mas se precisar nós damos!"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica. seu gato precisa de uma por ano."
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