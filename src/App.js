import {Component} from "react";

import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            cloned : [],
            monsters : []
        };
    }

    componentDidMount() { // The first time component renders at the screen & appears
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((value) => value.json())
            .then((users) => {
                this.setState(() => {
                    return {
                        cloned : users,
                        monsters : users,
                    }
                });
            });
    }

    onSearchChange = (event) => {
        const value = event.target.value;
        if (value === "") {
            this.setState(() => {
                return {
                    monsters: this.state.cloned
                }
            })
        } else {
            this.setState(() => {
                return {
                    monsters: this.state.cloned.filter((element) => element.name.toLowerCase().includes(value.toLowerCase()))
                }
            })
        }
    }

    render() {
        return (
            <div className="App">
                <SearchBox className='search-box' onChangeHandler={this.onSearchChange} placeholder='search monsters'/>
                <CardList monsters={this.state.monsters}/>
            </div>
        );
    }
}

export default App;
