import React, {Component} from 'react';
import styled from 'styled-components';
import Champions from './components/Champions';
import SummonerSpells from './components/SummonerSpells';
import Items from './components/Items';


class App extends Component {
  state = {
    champions: [],
    runes: [],
    spells: [],
    items: []
  }

  componentWillMount(){
    this.getChampion();
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
      // console.log(runesReforged);
      console.log(champions);
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
      randomChampion: [this.state.champions[Math.floor(Math.random() * this.state.champions.length)]]
    })
  };

  // getChampion = (e) => {
  //     let randomChampion = this.state.champions[Math.floor(Math.random() * this.state.champions.length)];
  //     const newState = {...this.state.champions.name}
  //     newState.champions = (randomChampion)
  //     this.setState(newState)
  //     console.log(Object.values(randomChampion));
  //   }

  render() {     
    console.log(this.state.randomChampion);
    return (
      <div>
        <HeadsUp>
          <h1>ULTIMATE BRAVERY</h1>
          
          <p>Are you brave enough?</p>
        </HeadsUp>

        <ChampGrid>
          <button onClick={this.getChampion}>
            Please Not Teemo
          </button>  
          {/* {this.state.randomChampion.map((champion) =>{
            return(
            <div key={champion.key}>
              {champion.name}
            </div>
            )
          })} */}
          {/* {this.state.champions.map(champion => <Champions key={champion.key} champion={champion} image={champion} button={champion} />)} */}
        </ChampGrid>
     
        Runes Go Here
     
        {this.state.runes.map(rune =>{
          return (
            <div key={rune.id}>
              {rune.name}
              {/* {rune.slots.map(slot =>{
                return (
                  <div>
                    {slot.runes.map}
                  </div>
                )
              })} */}
              {rune.slots.runes}
            </div>
          )
        })}         
        <SummonerGrid>
          {this.state.spells.map(spell => <SummonerSpells key={spell.key} spell={spell}/> )}
        </SummonerGrid>
        <ItemGrid>
          {this.state.items.map(item => {
            if (item.maps[11]){
              return (
              // <div key={item.key}>
              //   {item.name}
              //   <img src={`${ITEM_POSTER}${item.image.full}`} title={item.plaintext} alt=""/>
              // </div>
              <Items key={item.key} item={item} /> 
              )}  
          })
          }
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

const SummonerGrid = styled.div`
  display: flex;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6,1fr);
  grid-row-gap: 0.4rem;
`

const ItemGrid = styled.div`
  display: flex;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6,1fr);
  grid-row-gap: 0.4rem;
`