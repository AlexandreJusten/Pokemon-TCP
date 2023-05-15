import React from 'react';
import SelectChamp from '../select-champ/select-champ.js';
import { Containner } from './styled.js'
import powerCharizard1 from '@/assets/power/Charizard/1.png'
import powerCharizard2 from '@/assets/power/Charizard/2.png'
import powerCharizard3 from '@/assets/power/Charizard/3.png'

import powerBlastoise1 from '@/assets/power/Blastoise/1.png'
import powerBlastoise2 from '@/assets/power/Blastoise/2.png'
import powerBlastoise3 from '@/assets/power/Blastoise/3.png'

interface PowersProps {
  props: string;
}

function Powers(props: PowersProps) {

  function random() {
    const min = 9;
    const max = 20;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div>
      <Containner>
        <div className='box-power'>
          Select:
          <div className='powers'>



            {props.props === "Charizard" ? (
              <div>
                <a href='#' onClick={random} data-pokemon="Charizard" className='a'><img src={powerCharizard1} alt="Descrição da imagem" /></a>
                <span>    </span>
                <a href='#' onClick={random} data-pokemon="Blastoise" className='b'><img src={powerCharizard2} alt="Descrição da imagem" /></a>
                <span>  </span>
                <a href='#' data-pokemon="Blastoise" className='c'><img src={powerCharizard3} alt="Descrição da imagem" /></a>
              </div>
            ) : (
              <div>
                <a href='#' onClick={random} data-pokemon="Blastoise" className='a'><img src={powerBlastoise1} alt="Descrição da imagem" /></a>
                <span>    </span>
                <a href='#' onClick={random} data-pokemon="Blastoise" className='b'><img src={powerBlastoise2} alt="Descrição da imagem" /></a>
                <span>  </span>
                <a href='#' onClick={random} data-pokemon="Blastoise" className='c'><img src={powerBlastoise3} alt="Descrição da imagem" /></a>
              </div>
            )}

          </div>
        </div>
      </Containner>
    </div>
  );
}

export default Powers;
