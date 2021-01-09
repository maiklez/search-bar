import React, { useState } from 'react';
import { ReactComponent as SearchIcon} from './res/search-init.svg';
import { ReactComponent as SearchFocusIcon} from './res/search.svg';
import { ReactComponent as SpinnerIcon} from './res/loader.svg';

function SearchBar ({keyword, handleInputChange, handleKeyDown}) {
  const [icon, setIcon] = useState('search');

  const Icon = props => {
    switch(props.name) {
      case 'search':
        return <SearchIcon {...props} />;
      case 'search-focus':
        return <SearchFocusIcon {...props} />;
      case 'spinner':
        return <SpinnerIcon 
            {...props}
            className={`${props.className} App-logo`}
          />;
      default:
        return null;
    }
  };
  
  const changeBar = async (input) => {
    setIcon('spinner');
    await handleInputChange(input);
    setIcon('search-focus')
  };
  
  return (
    <div
      className='searchBarComponent'
      onFocus={(e) => setIcon('search-focus')}
      onBlur={(e) => setIcon('search')}
    >
      <input 
        className='searchBar'
        key='searchBar'
        value={keyword}
        placeholder={'Qué necesitas...'}
        onChange={(e) => changeBar(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Icon
        name={icon}
        className='searchIcon'
      />
    </div>
  );
}

export default SearchBar