import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      monster:[]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{
      return {monster:users}
    },
    ()=>{
      console.log(this.state);
    }
    ));
  }

  render(){
    return (
      <div className="App">
          {
            this.state.monster.map((mon)=>{
              return <div key={mon.id}><h1>{mon.name}</h1></div>
            })
          }
      </div>
    );
  }
}

export default App;
