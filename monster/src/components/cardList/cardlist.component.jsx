import { Component } from "react";

class CardList extends Component{

    render(){
        const {monsters}=this.props;
        
        return(
            <div>
                {monsters.map(mon=>(
                    <h1 key={mon.id}>{mon.name}</h1>
                ))}
            </div>
        );
    }
}

export default CardList;