import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';
import { FoodBox } from './components/FoodBox';
import { Search } from './components/Search';

function App() {
  const [search, setSearch] = useState('');
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="title">IronNutrition</h1>

        <Search search={search} setSearch={setSearch} />

        <FoodBox foods={foods} />
      </div>
    </BrowserRouter>
  );
}

export default App;
