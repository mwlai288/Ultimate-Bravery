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
    items: [],
    randomItem: {},
    randomItem2: {},
    randomItem3: {},
    randomItem4: {},
    randomItem5: {},
    randomItem6: {},
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
  
  getSpell = () => {
    const spells = this.state.spells.filter((spell) => {
      return spell.modes.includes('CLASSIC')
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
  
  getItems = () => {
    const items = this.state.items.filter((item) => {
      return item.depth >= 3 && item.maps[11] && item.hideFromAll !== true && item.requiredAlly !== "Ornn" && !item.name.includes("Quick Charge" || "Bilgewater Cutlass") 
      // if (this.state.randomChampion.name === "Viktor") {
      //   item.name.includes("The Hex Core")
      // }
    })
    const boots = this.state.items.filter((boot) => {
      return boot.tags.includes("Boots") && boot.inStore !== false && !boot.name.includes("Boots of Speed")
    })
      let randomItem = boots[Math.floor(Math.random() * boots.length)]
      let randomItem2 = items[Math.floor(Math.random() * items.length)]
      let randomItem3 = items[Math.floor(Math.random() * items.length)]
      let randomItem4 = items[Math.floor(Math.random() * items.length)]
      let randomItem5 = items[Math.floor(Math.random() * items.length)]
      let randomItem6 = items[Math.floor(Math.random() * items.length)]
      while (randomItem === randomItem2 ) {
        randomItem2 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem === randomItem3) {
        randomItem3 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem === randomItem4) {
        randomItem4 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem === randomItem5) {
        randomItem5 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem === randomItem6) {
        randomItem6 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem2 === randomItem3) {
        randomItem3 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem2 === randomItem4) {
        randomItem4 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem2 === randomItem5) {
        randomItem5 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem2 === randomItem6) {
        randomItem6 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem3 === randomItem4) {
        randomItem5 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem3 === randomItem5) {
        randomItem5 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem3 === randomItem6) {
        randomItem6 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem4 === randomItem5) {
        randomItem5 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem4 === randomItem6) {
        randomItem6 = items[Math.floor(Math.random() * items.length)]
      }
      while (randomItem5 === randomItem6) {
        randomItem6 = items[Math.floor(Math.random() * items.length)]
      }
    this.setState({
      randomItem,
      randomItem2,
      randomItem3,
      randomItem4,
      randomItem5,
      randomItem6
    })
  };
  
  render() {   
    return (
      <div>
        <HeadsUp>
          <h1>ULTIMATE BRAVERY</h1>
          <p>Are you brave enough?</p>
        </HeadsUp>
      <BodyStyle>

        <div>  
          <button onClick={this.getChampion}>
            Please Not Teemo
          </button> 
          <Champions randomChampion={this.state.randomChampion}/>
        </div>
        <br/>


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
        <br/>
        <div>
          <button onClick={this.getSpell}>
            D for Flash
          </button>
          <br/>
          <div>
            <SRSpells randomSpell={this.state.randomSpell}/> <SRSpells randomSpell={this.state.randomSpell2}/>
          </div>
        </div>
        
        
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

          <div>
            <button onClick={this.getItems}>
              Tons of Damage
            </button> 
            <div>
              <Items randomItem={this.state.randomItem}/>
              <Items randomItem={this.state.randomItem2}/>
              <Items randomItem={this.state.randomItem3}/>
              <Items randomItem={this.state.randomItem4}/>
              <Items randomItem={this.state.randomItem5}/>
              <Items randomItem={this.state.randomItem6}/>
            </div>
          </div>
          </BodyStyle>
      </div>
    );
  }
}

export default App;

const BodyStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

// const SummonerGrid = styled.div`
//   display: flex;
//   display: grid;
//   padding: 1rem;
//   grid-template-columns: repeat(6,1fr);
//   grid-row-gap: 0.4rem;
// `

// const ItemGrid = styled.div`
//   display: flex;
//   display: grid;
//   padding: 1rem;
//   grid-template-columns: repeat(6,1fr);
//   grid-row-gap: 0.4rem;
// `