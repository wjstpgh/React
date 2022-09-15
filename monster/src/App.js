import { useState,useEffect } from 'react';
import './App.css';
import CardList from './components/cardList/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';

const App=()=>{
  const [searchField,setSearchField]=useState('');
  const [monsters,setMonsters]=useState([]);
  const [filtedmonsters,setFiltedmonsters]=useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>setMonsters(users));
  },[]);

  useEffect(()=>{
    const filtedmonsters=monsters.filter((mon)=>{
      return mon.name.toLocaleLowerCase().includes(searchField);
    });

    setFiltedmonsters(filtedmonsters);
  },[monsters,searchField]);

  const onSearchChange=(event)=>{
    const searchFieldString=event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return(
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
        />
        <CardList monsters={filtedmonsters} />
    </div>
  )
}

export default App;
