import { Component } from 'react';
import './App.css';
import CardList from './components/cardList/cardlist.component';

class App extends Component {
  constructor(){
    super();

    this.state={
      monster:[],
      searchField:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{
      return {monster:users}
    }));
  }

  onSearchChange=(event)=>{
    const searchField=event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField}
    })
  }

  render(){
    const {monster,searchField}=this.state;
    const {onSearchChange}=this;

    const filtedmonsters=monster.filter((mon)=>{
      return mon.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={onSearchChange}
        />
        <CardList monsters={filtedmonsters} />
      </div>
    );
  }
}

export default App;
