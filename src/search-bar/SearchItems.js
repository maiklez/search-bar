
import React from 'react';

function BoldedText(text, shouldBeBold) {
  const startValue = text.slice(0, text.toLowerCase().indexOf(shouldBeBold));
  const boldValue = text.slice(
    text.toLowerCase().indexOf(shouldBeBold),
    text.toLowerCase().indexOf(shouldBeBold) + shouldBeBold.length
  );
  const endValue = text.slice(
    text.toLowerCase().indexOf(shouldBeBold) + shouldBeBold.length,
    text.length
  );

  return (
    <span>
      {startValue}
      <b>{boldValue}</b>
      {endValue}
    </span>
  );
}

function SearchItems ({itemsList=[], cursor, handleMouseOverList, queryString, visibleItems=6}) {

  const height = {maxHeight: `${42 * visibleItems + 48}px`};    
    
  if(itemsList.length > 0){
    return (
      <div
        className="searchItems"
        style={height}
      >
      {
        itemsList.map((data,index) => {
          if (data) {
            return (
              <li
                key={index}
                onMouseOver={(e) => handleMouseOverList(index)}
                className={cursor === index ? 'searchItem hovered' : 'searchItem'}
              >
                {BoldedText(data.name, queryString)}
                <span className='itemCategory'>{` in ${data.category}`}</span>
              </li>	
           )	
         }

         return null
        })
      }
      </div>
    );
  }

  return null;
}

export default SearchItems
