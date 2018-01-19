import React from 'react';


const ITEM_POSTER = ('http://ddragon.leagueoflegends.com/cdn/7.24.2/img/item/')

const Items = ({ randomItem }) => {
      return (
        <div>
        {/* <div> */}
          {/* {randomItem.name}
        <br/> */}
          {randomItem.image ? <img src={`${ITEM_POSTER}${randomItem.image.full}`} alt='' />
            : null}
      {/* </div> */}
        </div>
    );
  };

export default Items;


