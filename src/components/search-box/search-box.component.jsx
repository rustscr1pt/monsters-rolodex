import {Component} from "react";
import './search-box.styles.css';

// class SearchBox extends Component {
//     render() {
//         return (
//             <input
//                 className={`search-box ${this.props.className}`}
//                 type='search'
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}
//             />
//         )
//     }
// }

const SearchBox = (props) => {
    return (
        <input
            className={`search-box ${props.className}`}
            type='search'
            placeholder={props.placeholder}
            onChange={props.onChangeHandler}
        />
    )
}

export default SearchBox;