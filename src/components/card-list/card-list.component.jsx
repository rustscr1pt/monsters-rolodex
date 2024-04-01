import {Component} from "react";
import CardComponent from "../card-component/card-component.component";
import './card-list.styles.css'
import './card.styles.css'


// classic component styled
// class CardList extends Component {
//     render() {
//         console.log(this.props.monsters);
//         return (
//             <div className='card-list'>
//                 {this.props.monsters.map((monster) => {
//                     const {name, email, id} = monster // Destruct name, email, id so there is no need to write monster.id|email|name.
//                     return <CardComponent name={name} email={email} id={id}/>
//                 })}
//             </div>
//         )
//     }
// }

const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map((monster) => {
                return <CardComponent name={monster.name} email={monster.email} id={monster.id}/>
            })}
        </div>
    )
}

export default CardList;