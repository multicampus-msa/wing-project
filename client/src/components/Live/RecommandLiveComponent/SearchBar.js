import React, {Component} from 'react';


class SearchBar extends Component {
    
    state = { term: '' } // term 은 input 창에 쓰이는 값

    onInputChange = (e) => {
        this.setState(
            {term : e.target.value});
    }

    handleClick = () => {
        this.props.onSearchTermChange(this.state.term); 
        this.setState({
            term : ''
        })
    }

    handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            this.props.onSearchTermChange(this.state.term);         
            this.setState({
                term : ''
            })
        }
    }

    render() {
        console.log(this.state.term);
        return (
            <div className="search-bar">
                <input 
                    onChange = {this.onInputChange} 
                    value = {this.state.term}
                    onKeyPress = {this.handleKeyPress}
                    placeholder = "검색어를 입력하세요"/>&nbsp;
                <button onClick={this.handleClick}> 검색 <img alt="search" src= "search.png" width='22px' height='20px' /> </button>
            </div>
        )
    }
}


export default SearchBar;