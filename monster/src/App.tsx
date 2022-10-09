import { useState,useEffect,ChangeEvent } from 'react';
import './App.css';
import CardList from './components/cardList/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';
import { getData } from './utils/data.utils';

export type Monster={
  id:string;
  name:string;
  email:string;
};

const App=()=>{
  const [searchField,setSearchField]=useState('');
  const [monsters,setMonsters]=useState<Monster[]>([]);
  const [filtedmonsters,setFiltedmonsters]=useState(monsters);

  useEffect(()=>{
    const fetchUsers=async()=>{
      const users=await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };

    fetchUsers();
  },[]);

  useEffect(()=>{
    const newFiltedmonsters=monsters.filter((mon)=>{
      return mon.name.toLocaleLowerCase().includes(searchField);
    });

    setFiltedmonsters(newFiltedmonsters);
  },[monsters,searchField]);

  const onSearchChange=(event:ChangeEvent<HTMLInputElement>):void=>{
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
