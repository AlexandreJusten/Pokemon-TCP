import PlacarInfo from '@/components/placar-info/placar-info.js';
import Powers from '@/components/powers/powers';
import BackgroundWar from '@/entities/background-war/background-war.js';
import Pokemon from '@/entities/pokemon/pokemon.js';
import Trainer from '@/entities/trainer/trainer.js';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { Containner } from './styled.js'
import { enviarMensagem } from '@/controller/conection/cliente';

function War () {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const[user2,setUser2]= useState('unde')

  function sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (user2 !== 'unde') {
        console.log('user2 é diferente de "unde"');
        // Faça algo aqui
        clearInterval(interval); // para o intervalo quando user2 for diferente de 'unde'
      }setUser2(enviarMensagem('user2'));
    }, 1000);

    return () => clearInterval(interval); // limpa o intervalo quando o componente for desmontado
  }, [user2]);

  return (
    <div >
      <Containner>
        <div className='users-on'>
        <p>User 1: {id} | User 2:{user2}</p>
        </div>
        <PlacarInfo props={id+''}/>
      <div className='pokemon-div'>
      <Pokemon props={id+''}/>
      </div>
      {user2 !== 'unde' ? (
        <div className='x2-div'>
          <Pokemon props={user2}/>
        </div>
      ) : (
        <Pokemon props={user2}/>
      )}
       <Powers props={id+''}/>
       <div className='trainer'>
       <Trainer/>
       </div>
   <BackgroundWar/>
      </Containner>
    </div>
  );
}

export default War;
