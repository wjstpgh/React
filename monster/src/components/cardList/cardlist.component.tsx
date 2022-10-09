import './card-list.styles.css';
import Card from "./card/card.component";
import { Monster } from '../../App';

type CardListProps={
    monsters:Monster[];
}

const CardList = ({ monsters }:CardListProps) => {
    return (
        <div className="card-list">
            {monsters.map(monster =>
                <Card key={monster.id} mon={monster} />
            )}
        </div>
    );
};

export default CardList;