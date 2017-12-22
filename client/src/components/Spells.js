import React from 'react';

const SPELL_IMAGE = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/spell/'

const Spells = ({spell}) => {
  return (
    <div>
      {spell.name}
      <br/>
      <img src={`${SPELL_IMAGE}${spell.image.full}`} alt=""/>
    </div>
  );
};

export default Spells;