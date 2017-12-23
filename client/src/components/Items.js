import React from 'react';

const ITEM_POSTER = ('http://ddragon.leagueoflegends.com/cdn/7.24.2/img/item/')

const Items = ({item}) => {
    if (item.maps[11]) {
      return (
        <div>
          {item.name}
          <br/>
          <img src={`${ITEM_POSTER}${item.image.full}`} title={item.plaintext} alt=""/>
        </div>
      );
   }
};

export default Items;