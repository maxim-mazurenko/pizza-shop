import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

export const SearchContex = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContex.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </SearchContex.Provider>
    </div>
  );
}

export default App;
