import React, { useEffect, useState } from 'react';
import { Containner } from './styled.js'
import MOCK_POKEMON from '@/entities/pokemon/MOCK_POKEMON.json';
import CharizardIcon from '@/assets/pokemon/charizard-icon.jpg'
import  BlastoiseIcon from '@/assets/pokemon/blastoise-icon.jpg'

interface PlacarProps {
  props?: string;
}

function PlacarInfo(props: PlacarProps) {
  

  return (
    <div>
      <Containner>
      <div className='placar'>
      <h3 className='life1'>Life: 50</h3>
      <img src={CharizardIcon} alt="" />
      <br /><br /><br />
      <h3 className='life2'>Life: 50</h3>
        <img src={BlastoiseIcon} alt="" />
      </div>
      </Containner>
    </div>
  );
}

export default PlacarInfo;
