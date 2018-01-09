import React from 'react';

const SUMMONER_SPELL_IMAGE = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/spell/'

const SRSpells = ({randomSpell}) => {
    return (
      <div>
        {/* {Object.values(randomSpell.modes) === 'TUTORIAL' ? randomSpell.name : null} */}
        {randomSpell.name}
        <br/>
        {randomSpell.image ? <img src={`${SUMMONER_SPELL_IMAGE}${randomSpell.image.full}`} alt='' />
          : null}
      </div>
    );
  };
//  };

// const SRSpells = ({ randomSpell }) => (
//   <div>
//         {randomSpell.name}
//         <br/>
//         {randomSpell.image ? <img src={`${SUMMONER_SPELL_IMAGE}${randomSpell.image.full}`} alt='' />
//           : null}
//   </div>
// );

      // <div>
      //   {randomSpell.name}
      //   <br/>
      //   {randomSpell.image ? <img src={`${SUMMONER_SPELL_IMAGE}${randomSpell.image.full}`} alt='' />
      //     : null}
      // </div>
export default SRSpells;