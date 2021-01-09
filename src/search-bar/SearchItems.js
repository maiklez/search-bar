
import React from 'react';

const ITEM_PADDING_TOP = 11;
const ITEM_HEIGHT = 31;

function BoldedText(text, shouldBeBold) {
  if(text.toLowerCase().indexOf(shouldBeBold.toLowerCase()) > 0) {
    const startValue = text.slice(0, text.toLowerCase().indexOf(shouldBeBold.toLowerCase()));
    const boldValue = text.slice(
      text.toLowerCase().indexOf(shouldBeBold.toLowerCase()),
      text.toLowerCase().indexOf(shouldBeBold.toLowerCase()) + shouldBeBold.length
    );
    const endValue = text.slice(
      text.toLowerCase().indexOf(shouldBeBold.toLowerCase()) + shouldBeBold.length,
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
  return (
    <span>{text}</span>
  );
}

function SearchItems (props) {
  const {
    itemsList=[],
    cursor,
    handleMouseOverList,
    queryString,
    visibleItems=6
  } = props;

  const itemCSS = {  height: `${ITEM_HEIGHT}px`, paddingTop: `${ITEM_PADDING_TOP}px` }
  const itemsCSS = {
    maxHeight: `${(ITEM_HEIGHT + ITEM_PADDING_TOP) * visibleItems + 48}px`,
    paddingTop: `${48}px`,
    position: 'relative',
    top: `-${48}px`
  };    
    
  if(itemsList.length > 0){
    return (
      <div
        className="searchItems"
        style={itemsCSS}
      >
      {
        itemsList.map((data,index) => {
          if (data) {
            return (
              <li
                key={index}
                onMouseOver={(e) => handleMouseOverList(index)}
                className={cursor === index ? 'searchItem hovered' : 'searchItem'}
                style={itemCSS}
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
