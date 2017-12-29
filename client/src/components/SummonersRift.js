import React from 'react';
  
const CHAMPION_SQUARE = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/';

const Champions = ({ randomChampion }) => (
  <div>
    {randomChampion.name}
    <br/>
    {randomChampion.title}
    <br/>
    {randomChampion.image ? <img src={`${CHAMPION_SQUARE}${randomChampion.image.full}`} />
          : null} 
  </div>
);


export default Champions;




