import './card-list.styles.css';
import Card from "./card/card.component";

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map(mon =>
                <Card key={mon.id} mon={mon} />
            )}
        </div>
    );
};

export default CardList;