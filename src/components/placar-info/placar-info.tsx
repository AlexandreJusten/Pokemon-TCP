import React, { useEffect, useState } from 'react';
import { Containner } from './styled.js'
import MOCK_POKEMON from '@/entities/pokemon/MOCK_POKEMON.json';
import CharizardIcon from '@/assets/pokemon/charizard-icon.jpg'
import  BlastoiseIcon from '@/assets/pokemon/blastoise-icon.jpg'
import { enviarMensagem } from '@/controller/conection/cliente';

interface PlacarProps {
  propsUser1?: string;
  propsUser2?: string;
  propsLife1?: any;
  propsLife2?: any;
}

function PlacarInfo(props: PlacarProps) {
  
  let imageSrc1;

  if (props.propsUser1 === 'Charizard') {
    imageSrc1 = CharizardIcon;
  } else if (props.propsUser1 === 'Blastoise') {
    imageSrc1 = BlastoiseIcon;
  } 

  let imageSrc2;

  if (props.propsUser2 === 'Charizard') {
    imageSrc2 = CharizardIcon;
  } else if (props.propsUser2 === 'Blastoise') {
    imageSrc2 = BlastoiseIcon;
  } 

  useEffect(() => {
    setUserLife(props.propsLife1)
    setUser2Life(props.propsLife2)
  }, [props.propsLife1,props.propsLife2]); 

  const [youLife, setUserLife] = useState();
  const [user2Life, setUser2Life] = useState();


  return (
    <div>
      <Containner>
      <div className='placar'>
      <h3 className='life1'>Life: {youLife}</h3>
      <img src={imageSrc1} alt="" />
      <br /><br /><br />
      <h3 className='life2'>Life: {user2Life}</h3>
        <img src={imageSrc2} alt="" />
      </div>
      </Containner>
    </div>
  );
}

export default PlacarInfo;
