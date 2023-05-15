import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import logoText from '@/assets/logo_text.png'
import Trainer from '@/entities/trainer/trainer';
import { Containner } from './styled.js'
import CardInfo from '@/components/card-info/card-info.js';
import CardSelect from '@/components/card-select/card-select.js';
import { Link } from 'react-router-dom';
import Pokemon from '@/entities/pokemon/pokemon.js';
import MainMusic from '@/music/main-music/main-music.js';

function Panel() {

  return (
    <div className='trainer2'>

      <Containner>
        {/* <MainMusic/> */}
        <img src={logoText} alt="" className='logoTextPanel' />
        {/* <CardInfo/> */}
        <CardSelect />
        {/* <Link to={{ pathname: '/war', search: '?id=123' }}>
          <button className='pronto' >PRONTO</button>
        </Link> */}
        <div className='trainer'>
          <Trainer />
        </div>

      </Containner>
    </div>
  );
}

export default Panel;
