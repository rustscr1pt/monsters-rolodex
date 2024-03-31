import {Component} from "react";
import CardComponent from "../card-component/card-component.component";
import './card-list.styles.css'
import './card.styles.css'

class CardList extends Component {
    render() {
        console.log(this.props.monsters);
        return (
            <div className='card-list'>
                {this.props.monsters.map((monster) => {
                    const {name, email, id} = monster // Destruct name, email, id so there is no need to write monster.id|email|name.
                    return <CardComponent name={name} email={email} id={id}/>
                })}
            </div>
        )
    }
}

export default CardList;