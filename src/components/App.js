import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component{

    onSearchSubmit(term){
      //  console.log(term);

        axios.get('https://api.unsplash.com/search/photos',{
            params:{query:term},
            headers:{
                Authorization: 'Client-ID tiT-JY2SFaKGFhVwQHCirOQ5ufmdgzhdThYkTjQzXuY'
            }
        });

    }

    render(){
        return <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar runWhenUserSubmit={this.onSearchSubmit}/>
        </div>
    }
    
}

export default App;