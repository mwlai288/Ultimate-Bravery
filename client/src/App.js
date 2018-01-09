import React, {Component} from 'react';
import styled from 'styled-components';
import Champions from './components/Champions';
import SRSpells from './components/SRSpells';
import Items from './components/Items';


class App extends Component {
  state = {
    champions: [],
    randomChampion: {},
    runes: [],
    spells: [],
    randomSpell: {},
    randomSpell2: {},
    items: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://ddragon.leagueoflegends.com/cdn/7.24.2/data/en_US/champion.json');
      const res2 = await fetch('http://ddragon.leagueoflegends.com/cdn/7.24.2/data/en_US/runesReforged.json');
      const res3 = await fetch('http://ddragon.leagueoflegends.com/cdn/7.24.2/data/en_US/summoner.json');
      const res4 = await fetch ('http://ddragon.leagueoflegends.com/cdn/7.24.2/data/en_US/item.json');
      const champions = await res.json();
      const runesReforged = await res2.json();
      const spells = await res3.json();
      const items = await res4.json();
      // console.log(spells);
      this.setState({
        champions: Object.values(champions.data),
        runes: runesReforged,
        spells: Object.values(spells.data),
        items: Object.values(items.data)
      });
    } catch(e) {
      console.log(e);
    }
  }
  
  getChampion = () => {
    this.setState({
      randomChampion: this.state.champions[Math.floor(Math.random() * this.state.champions.length)],
    })
  };

  getSpell1 = () => {
    const spells = this.state.spells.filter((spell) => {
      return spell.modes.includes('TUTORIAL')
    })
    const randomSpell = spells[Math.floor(Math.random() * spells.length)]
    let randomSpell2 = spells[Math.floor(Math.random() * spells.length)]
    while (randomSpell === randomSpell2){
      randomSpell2 = spells[Math.floor(Math.random() * spells.length)]
    }
    this.setState({
      randomSpell,
      randomSpell2,
    })
  }
  
  render() {     
    console.log(this.state.spells)
    // console.log(this.state.randomSpell.modes);
    // console.log(this.state.randomSpell2.modes);
    return (
      <div>
        <HeadsUp>
          <h1>ULTIMATE BRAVERY</h1>
          <p>Are you brave enough?</p>
        </HeadsUp>


        <div>  
          <button onClick={this.getChampion}>
            Please Not Teemo
          </button> 
          <Champions randomChampion={this.state.randomChampion}/>
        </div>
     
        Runes Go Here
     
        {/* {this.state.runes.map(rune =>{
          return (
            <div key={rune.id}>
              {rune.name}
              {rune.slots.map(slot =>{
                return (
                  <div>
                    {slot.runes.map}
                  </div>
                )
              })}
              {rune.slots.runes}
            </div>
          )
        })}          */}

        <div>
          <button onClick={this.getSpell1}>
            D for Flash
          </button>
          <br/>
          Spell 1:
          <SRSpells randomSpell={this.state.randomSpell}/>
        </div>
        <div>
          Spell 2:
          <SRSpells randomSpell={this.state.randomSpell2}/>
        </div>

      
        

        <ItemGrid>
          {/* {this.state.items.map(item => {
            if (item.maps[11]){
              return (
              // <div key={item.key}>
              //   {item.name}
              //   <img src={`${ITEM_POSTER}${item.image.full}`} title={item.plaintext} alt=""/>
              // </div>
              <Items key={item.key} item={item} /> 
              )}  
          })
          } */}
        </ItemGrid> 
      </div>
 
    );
  }
}

export default App;

const ChampButton = styled.button`
  display: flex;
  justify-content: space-around;
`
// const ChampGrid = styled.div`
//   display: flex;
//   display: grid;
//   padding: 1rem;
//   grid-template-columns: repeat(6,1fr);
//   grid-row-gap: 0.4rem;
//   `
const HeadsUp = styled.header`
  display: flex;  
  /* flex-wrap: wrap; */
  background-color: #222;
  height: 90px;
  padding: 10px;
  color: white;
  justify-content: center;
  `

// const SummonerGrid = styled.div`
//   display: flex;
//   display: grid;
//   padding: 1rem;
//   grid-template-columns: repeat(6,1fr);
//   grid-row-gap: 0.4rem;
// `

const ItemGrid = styled.div`
  display: flex;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6,1fr);
  grid-row-gap: 0.4rem;
`