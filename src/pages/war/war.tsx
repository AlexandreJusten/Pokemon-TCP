import PlacarInfo from '@/components/placar-info/placar-info.js';
import Powers from '@/components/powers/powers';
import BackgroundWar from '@/entities/background-war/background-war.js';
import Pokemon from '@/entities/pokemon/pokemon.js';
import Trainer from '@/entities/trainer/trainer.js';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { Containner } from './styled.js'
import { enviarMensagem } from '@/controller/conection/cliente';

function War () {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const[user2,setUser2]= useState('unde')

  const[life,setLife]= useState(1)  
  const[life2,setLife2]= useState(1)
  const[backLife,setBackLife ]= useState(50)
  const[backLife2,setBackLife2] = useState(50)

  const [pointer, setPointer] = useState(false);
  const [pointer2, setPointer2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (user2 !== 'unde' && user2 !== 'Conect') {
        console.log('user2 é diferente de "unde"');
        
        clearInterval(interval); 
      }setUser2(enviarMensagem('user2'));
    }, 1000);

    return () => clearInterval(interval);
  }, [user2]);

  useEffect(() => {
    if (life < backLife ) {
      setPointer(true);
      setTimeout(() => {
        setPointer(false);
      }, 3000);
    } 
    if (life2 < backLife2 ) {
      setPointer2(true);
      setTimeout(() => {
        setPointer2(false);
      }, 3000);
    } 
  }, [life, life2]);

  useEffect(() => {
    const interval = setInterval(() => {
      const mensagem = enviarMensagem('life');
      const valores = mensagem.split(',').map(valor => parseInt(valor.split(':')[1]));
      if(life !== valores[0] || life2 !== valores[1]){
        setLife(valores[0])
         setLife2(valores[1])
      }
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      <Containner>
      {pointer === true ? (
      <div className="pointer">
        <h2>{ backLife - life}</h2>
      </div>
    ) : (
      <div></div>
    )}
    {pointer2 === true ? (
      <div className="pointer2">
         <h2>{ backLife2 - life2 }</h2>
      </div>
    ) : (
      <div></div>
    )}
      {life <= 0 ? (
      <div className="end">
        <div className="end-text">
          <h1>Voce Perdeu!!</h1>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    ) : (
      <div></div>
    )}
    {life2 <= 0 ? (
      <div className="end">
        <div className="end-text">
          <h1>Voce Ganhou!!</h1>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    ) : (
      <div></div>
    )}
        <div className='users-on'>
        <p>You: {id} | User 2:{user2} teste:{backLife}</p>
        </div>
        <PlacarInfo propsUser1={id+''} propsUser2={user2+''} propsLife1={life} propsLife2={life2}/>
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
