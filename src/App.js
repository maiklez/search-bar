import SearchComponent from './search-bar/SearchComponent';

function configuration(){
  return Promise.resolve({
    apiUrl: 'https://rickandmortyapi.com/api',
    categories: [
      { name: 'character' },
      { name: 'location' },
    ],
    visibleSearchItems: 6,
  });
}

function App() {
  return (
    <div className="App">
      <h1>Rick y Morty API</h1>
      <SearchComponent
        configuration={configuration}
      />
    </div>
  );
}

export default App;
