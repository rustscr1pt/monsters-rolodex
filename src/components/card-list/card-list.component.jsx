import {Component} from "react";

class CardList extends Component {
    render() {
        console.log(this.props.monsters);
        return (
            <div className='card-list'>
                {this.props.monsters.map((monster) => {
                    const {name, email, id} = monster // Destruct name, email, id so there is no need to write monster.id|email|name.
                    return <div key={id}>
                        <img alt={`monster ${name}`}
                             src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                })}
            </div>
        )
    }
}

export default CardList;

// return <div key={monster.id}><h1>{monster.name}</h1></div>