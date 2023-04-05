import React from "react";
import './profile.css';

class profile extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: this.props.username,
            avatr : '',
            login : '',
        }
        
        fetch('https://api.github.com/search/users?q='+this.state.username,{
            method : 'GET',
            headers : {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then((res) => {
            
            this.setState({avatr:res.items[0].avatar_url})
            this.setState({login: res.items[0].login})
            console.log(res)
        })
    }

    render () {
        return(
            <div className='userContainer'>
                <img className='avatar' src={this.state.avatr} alt='Image'></img>
                <a className="gotoProfile" href={this.state.login}>
                    <button className="profileBtn">{this.state.login}</button>
                </a>
                    
            </div>
        );
    }
}

export default profile;