import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './res/search-bar.css';

import SearchBar from './SearchBar';
import SearchItems from './SearchItems';

async function getApiResults(apiUrl, category, input) {
  try {
    const { data } = await axios.get(`${apiUrl}?name=${input}`);
    const { results } = data;
    
    return results.map(r => {
      return { ...r, category };
    });
  }catch(error) {
    console.log(error);

    return [];
  }
}

function SearchComponent(props) {
  const [config, setConfig] = useState({});
  const [input, setInput] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [cursor, setCursor] = useState(0);

  const handleInputChange = async (input) => {
    setInput(input);
    if (input && input.length > 1) {
      const results = await Promise.all(config.categories.map(
        async c => getApiResults(
          `${config.apiUrl}/${c.name}`,
          c.name,
          input
        )));
      console.log(results);
      const mergedResults = [].concat(...results)
      console.log(mergedResults);
      return setSearchList(mergedResults);
    }

    return setSearchList([]);
  }

  const handleKeyDown = async (key) => {
    if(searchList.length > 0){
      if (key.keyCode === 38 && cursor > 0) {
        setCursor(cursor - 1);
      } else if (key.keyCode === 40 && cursor < searchList.length - 1) {
        setCursor(cursor + 1);
      }
    }
  }

  const handleMouseOverList = async (index) => {
    setCursor(index); 
  }
  
  useEffect( () => {
    async function fetchConfig() {
      const config = await props.configuration();
      setConfig(config);
    }
    fetchConfig();
  }, [props]);

  return (
    <>
      <SearchBar 
       keyword={input}
       handleInputChange={handleInputChange}
       handleKeyDown={handleKeyDown}
      />
      <SearchItems
        itemsList={searchList}
        cursor={cursor}
        handleMouseOverList={handleMouseOverList}
        queryString={input}
        visibleItems={config.visibleSearchItems}
      />
    </>
   );
}

export default SearchComponent