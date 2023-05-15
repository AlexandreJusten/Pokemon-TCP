import React from 'react';
import BackgroundWarImg from '@/assets/background-war.png'
import { Containner } from './styled.js'
function BackgroundWar() {
  return (
    <div>
      <Containner>
            <img src={BackgroundWarImg} alt="" />
      </Containner>
    </div>
  );
}

export default BackgroundWar;
