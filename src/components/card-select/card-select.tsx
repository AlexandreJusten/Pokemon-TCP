import React from 'react';
import SelectChamp from '../select-champ/select-champ.js';
import { Containner } from './styled.js'
function CardSelect() {
  return (
    <div>
      <Containner>
            <SelectChamp/>
      </Containner>
    </div>
  );
}

export default CardSelect;
