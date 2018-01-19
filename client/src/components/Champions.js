import React from 'react';
import styled from 'styled-components';
  
const CHAMPION_SQUARE = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/';

const Champions = ({ randomChampion }) => (
  <ChampBox>
    <ChampName>
      {randomChampion.name}
      <br/>
      {randomChampion.title}
    </ChampName>
    <br/>
    <ChampPic>
      {randomChampion.image ? <img src={`${CHAMPION_SQUARE}${randomChampion.image.full}`} alt="" />
          : null} 
    </ChampPic>
  </ChampBox>
);



export default Champions;

const ChampBox = styled.div`
  display: flex;
  flex-wrap: wrap
`

const ChampName = styled.div`
  display: flex;
  text-align: center;
`

const ChampPic = styled.div`
  display: flex;
`