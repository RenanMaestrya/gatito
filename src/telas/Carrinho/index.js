import React from "react";

import { FlatList } from 'react-native';

import Item from "./Item";

import StatusCarrinho from "../../componentes/StatusCarrinho";

const servicos = [
    {
        id: 1, 
        nome: "Tomate",
        preco: 1.9 ,
        descricao: "NAO DE BANHO NO SEU GATO! mas se precisar nós damos!",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Carne",
        preco: 12.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
        quantidade: "1"
    },
    {
        id: 3,
        nome: "Queijo",
        preco: 9.9,
        descricao: "Uma dose da vacina antirrábica. seu gato precisa de uma por ano.",
        quantidade: "2"
    }
]

export default function Carrinho(){
    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade) , 0)

    return <>
        <StatusCarrinho total={total}/>
        <FlatList
            data={servicos}
            renderItem={({item}) => <Item {...item}/>}
            keyExtractor={({id}) => String(id)}
        />
    </>
}