import React, { useEffect, useState } from 'react';
import { Containner } from './styled.js'
import MOCK_POKEMON from '@/entities/pokemon/MOCK_POKEMON.json';

interface PokemonProps {
  props: string;
}

function CardInfo(props: PokemonProps) {
  const pokemonData = MOCK_POKEMON.find(pokemon => pokemon.Name === props.props);

  return (
    <div>
      <Containner>
        <div className='life'>Life</div>
        <div className='life-bar'></div>
        <div className='life-text'>{pokemonData?.Life}</div>
        <div className='Attack'>Attack</div>
        <div className='Attack-bar'></div>
        <div className='Attack-text'>{pokemonData?.Attack}</div>
        <div className='Defense'>Defense</div>
        <div className='Defense-bar'></div>
        <div className='Defense-text'>{pokemonData?.Defense}</div>
      </Containner>
    </div>
  );
}

export default CardInfo;
