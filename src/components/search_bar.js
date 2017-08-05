import React, {Component} from 'react'

//every class based , must have a render method to produce HTML
class SearchBar extends Component {
  constructor(props){  //called whenever a new instance of this class is created
    super(props);
    this.state={
      term:''
    }
  }
  onInputChange(term){
     this.setState({ term })
     this.props.onSearchTermChange(term)
  }
  render() { //syntax for defining methods/functions in class, though it doesnt have : function(){} syntax
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }

}

export default SearchBar
