import React from 'react';
import ReactDOM from 'react-dom';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'

class App extends React.Component{

    state={images:[]};

    /*
    async onSearchSubmit(term){
    
        const response =await axios.get('https://api.unsplash.com/search/photos',{
            params:{query:term},
            headers:{
                Authorization: 'Client-ID tiT-JY2SFaKGFhVwQHCirOQ5ufmdgzhdThYkTjQzXuY'
            }
        });

        console.log(response.data.results)
        console.log(this)
        this.setState({images:response.data.results})
    }
    */
     onSearchSubmit=async (term)=>{
    
        const response =await unsplash.get('/search/photos',{
            params:{query:term},
        });

        console.log(response.data.results)
        console.log(this)
        this.setState({images:response.data.results})
    }

    render(){
        return <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar runWhenUserSubmit={this.onSearchSubmit}/>
            Found :{this.state.images.length} images
        </div>
    }
    
}

export default App;
