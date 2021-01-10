# search-bar
## Description
**Search Bar Component made with React**

``
  <SearchComponent
    configuration={configuration}
  />
``

where configuration is a Promise that resolves for example with rick and morty api:

``` 
  {
    apiUrl: 'https://rickandmortyapi.com/api',
    categories: [
      { name: 'character' },
      { name: 'location' },
    ],
    visibleSearchItems: 6,
  }
```
  
## Install
- npm install
## Run Demo
- npm start
- open http://localhost:3000/
