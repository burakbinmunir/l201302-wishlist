import React from "react";
import Profile from "./profile";
import './gitapi.css'
class gitapi extends React.Component {
    constructor(){
        super();
        this.state = {
            newUsername: '',
            profiles: [ <Profile username='burakbinmunir'/>,<Profile username='dark-coder12'/>,<Profile username='bismaashar'/>]
        }
    }

    callApi = () => {
       var temp = [];
       temp = this.state.profiles;
       temp.push(<Profile username={this.state.newUsername}/>);
       this.setState({profiles:temp})
    }

    render(){
        return(
            <div>

                <div className="search">
                    <input type='text' className='searchBar' onChange={(event)=> this.setState({newUsername:event.target.value})}></input>
                    <button className="searchBtn" onClick={this.callApi}>Search</button>
                </div>

                <div className='profilesContainer'>
                    {this.state.profiles}                
                </div>
            </div>
        );
    }
}

export default gitapi;