/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
// Create a new component. This component outputs HTML
import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAzScUsiakZwNe853AO9Z8UiFZGOa4mWZk';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Put into the html
ReactDom.render(<App />, document.querySelector('.container'));
