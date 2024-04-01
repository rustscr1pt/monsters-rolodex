import {useState, useEffect } from "react";

import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {

    const [searchField, setSearchField] = useState(''); // [value, setValue]
    const [clonedField, setClonedField] = useState([]);
    const [monsterField, setMonsterField] = useState([]);

    useEffect(() => { // restricted its execution by using useEffect.
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((value) => value.json())
            .then((users) => {
                setClonedField(users);
                setMonsterField(users);
            });
    }, []) // because there are no objects inside the square brackets, the function will run only one time.


    const onSearchChange = (event) => {
        const value = event.target.value;
        setSearchField(value); // Updating the search field with value which arrived from onlick{} handler
    }

    useEffect(() => {
        if (searchField === "") {
            setMonsterField(clonedField);
        }
        else {
            setMonsterField(clonedField.filter((element) => element.name.toLowerCase().includes(searchField)))
        }
    }, [searchField])

    return (
        <div className="App">
            <SearchBox
                className='search-box'
                onChangeHandler={onSearchChange}
                placeholder='search monsters'/>
            <CardList monsters={monsterField}/>
        </div>
    )
}

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             cloned: [],
//             monsters: []
//         };
//     }
//
//     componentDidMount() { // The first time component renders at the screen & appears
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((value) => value.json())
//             .then((users) => {
//                 this.setState(() => {
//                     return {
//                         cloned : users,
//                         monsters : users,
//                     }
//                 });
//             });
//     }
//
//     onSearchChange = (event) => {
//         const value = event.target.value;
//         if (value === "") {
//             this.setState(() => {
//                 return {
//                     monsters: this.state.cloned
//                 }
//             })
//         } else {
//             this.setState(() => {
//                 return {
//                     monsters: this.state.cloned.filter((element) => element.name.toLowerCase().includes(value.toLowerCase()))
//                 }
//             })
//         }
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <SearchBox className='search-box' onChangeHandler={this.onSearchChange} placeholder='search monsters'/>
//                 <CardList monsters={this.state.monsters}/>
//             </div>
//         );
//     }
// }

export default App;
