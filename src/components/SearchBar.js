import React from 'react';

class SearchBar extends React.Component {

    /*
    onInputChange(event){

        console.log(event.target.value);

    }
    */
    /*
    onInputClick(event){
        console.log('input clicked')
    }
    */
   state={term:''};

   /*
   onFormSubmit(e){
       e.preventDefault();
       console.log(this.state.term)
   }
   */
  onFormSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.term)
    this.props.runWhenUserSubmit(this.state.term);
  }

    render(){
       return (
           <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                Search : <input type="text"  value={this.state.term} onChange={(e)=>this.setState({term:e.target.value.toUpperCase()}) }/>     
                </div>
            </form>
           </div>
       ) ;
    }
}

export default SearchBar;