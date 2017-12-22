import React from 'react';
  

const CHAMPION_SQUARE = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/';

const Champions = ({champion}) => (
  <div>
      {champion.name}
      <br/>
      <img src={`${CHAMPION_SQUARE}${champion.image.full}`} alt="" />
  </div>
);


export default Champions;




