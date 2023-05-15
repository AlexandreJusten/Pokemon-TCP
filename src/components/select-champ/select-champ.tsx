import React, { useState } from 'react';
import { Containner } from './styled.js'
import CharizardIcon from '@/assets/pokemon/charizard-icon.jpg'
import  BlastoiseIcon from '@/assets/pokemon/blastoise-icon.jpg'
import Pokemon from '@/entities/pokemon/pokemon.js';
import CardInfo from '../card-info/card-info.js';
import { Link } from 'react-router-dom';
import { userPokemon } from '@/controller/conection/cliente';

function SelectChamp() {
  const [select, setSelect] = useState("Blastoise");

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, any>) {
    const pokemon = e.currentTarget.getAttribute("data-pokemon");
    setSelect(pokemon+'');

  }
  function start(){
    userPokemon(select)
  }
  return (
    <div>
      <Containner>
            <a href='#' onClick={handleClick} data-pokemon="Charizard"><img src={CharizardIcon} alt="Descrição da imagem" width={35} /></a>
            <span>  </span>
            <a href='#' onClick={handleClick} data-pokemon="Blastoise"><img src={BlastoiseIcon} alt="Descrição da imagem" width={35} /></a>
            <div className='pokemon'>
            <Pokemon props={select}/>
            <CardInfo props={select}/>
            </div>
            <Link to={{ pathname: '/war', search: '?id='+`${select}` }}>
          <button onClick={start} className='pronto' >PRONTO</button>
        </Link>
      </Containner>
    </div>
  );
}

export default SelectChamp;