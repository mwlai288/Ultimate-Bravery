import React, {Component} from 'react';
import styled from 'styled-components';

import Champions from './components/Champions';

class App extends Component {
  state = {
    champions: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://ddragon.leagueoflegends.com/cdn/7.24.2/data/en_US/champion.json');
      const champions = await res.json();
      console.log(champions);
      this.setState({
        champions: Object.values(champions.data)
      });
    } catch(e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        <HeadsUp>
          <h1>ULTIMATE BRAVERY</h1>
          
          <p>Are you brave enough?</p>
        </HeadsUp>
        <ChampGrid>
          {this.state.champions.map(champion => <Champions key={champion.key} champion={champion} image={champion}/>)}
        </ChampGrid>
      </div>
    );
  }
}

export default App;

const ChampGrid = styled.div`
  display: flex;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6,1fr);
  grid-row-gap: 0.4rem;
`
const HeadsUp = styled.header`
  display: flex;  
  /* flex-wrap: wrap; */
  background-color: #222;
  height: 90px;
  padding: 10px;
  color: white;
  justify-content: center;
`