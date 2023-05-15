import React from 'react';
import { Button } from 'reactstrap';
import Male from '@/assets/panel-game/male-trainer.png'
import PokemonCharizard from '@/assets/pokemon/Charizard.gif'
import Music from '@/assets/music/Fall Out Boy-Light  Em Up (Lyrics Video).mp3'
import { Containner } from './styled.js'
function MainMusic() {
  return (
    <Containner>
{/* autoPlay */}
<audio controls  >
  <source src={Music} type="audio/mpeg"/>
</audio>

    </Containner>
  );
}

export default MainMusic;
