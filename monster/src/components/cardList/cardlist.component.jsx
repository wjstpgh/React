import './card-list.styles.css';
import Card from "./card/card.component";

const CardList = ({monsters})=> {
    <div className="card-list">
        {monsters.map(mon=>{
            return(
                <Card mon={mon} />
            )})}
    </div>
}

export default CardList;