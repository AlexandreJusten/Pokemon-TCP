import React from 'react';
import { Button } from 'reactstrap';
import Male from '@/assets/panel-game/male-trainer.png'
import PokemonCharizard from '@/assets/pokemon/Charizard.gif'
import PokemonBlastoise from '@/assets/pokemon/Blastoise2.gif'

import { Containner } from './styled.js'

interface PokemonProps {
  props: string;
}

function Pokemon(props: PokemonProps) {
  return (
    <Containner>
      {props.props === "Charizard" ? (
        <div>
          <img src={PokemonCharizard} alt="" className='charizard' />
        </div>
      ) : (
        <div>
          <img src={PokemonBlastoise} alt="" className="blastoise" />
        </div>
      )}
    </Containner>
  );
}

export default Pokemon;

