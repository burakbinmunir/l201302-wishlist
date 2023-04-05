import React from "react";
import './profile.css';

class profile extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return(
            <div className='userContainer'>
                <img className='avatar' src={this.props.avatar_url} alt='Image'></img>
                <a className="gotoProfile" href={this.props.html_url}>
                    <button className="profileBtn">Visit Profile of {this.props.login}</button>
                </a>
                    
            </div>
        );
    }
}

export default profile;