import React from 'react';

const SUMMONER_SPELL_IMAGE = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/spell/'

const SummonerSpells = ({spell}) => {
  console.log(spell.modes)
  if (spell.modes != "TUTORIAL") {
    return (
      <div>
        {spell.name}
        <br/>
        <img src={`${SUMMONER_SPELL_IMAGE}${spell.image.full}`} alt=""/>
      </div>
    );
  };
}
    
export default SummonerSpells;