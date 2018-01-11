import React from 'react';
  
const CHAMPION_SQUARE = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/';

const Champions = ({ randomChampion }) => (
  <div>
    {randomChampion.name}
    <div>
      {randomChampion.title}
    </div>
    <div>
      {randomChampion.image ? <img src={`${CHAMPION_SQUARE}${randomChampion.image.full}`} alt="" />
          : null} 
    </div>
  </div>
);



export default Champions;


