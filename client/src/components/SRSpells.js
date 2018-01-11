import React from 'react';

const SUMMONER_SPELL_IMAGE = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/spell/'

const SRSpells = ({randomSpell}) => {
    return (
      <div>
        {randomSpell.name}
        <br/>
        {randomSpell.image ? <img src={`${SUMMONER_SPELL_IMAGE}${randomSpell.image.full}`} alt='' />
          : null}
      </div>
    );
  };

export default SRSpells;