import React from "react";
import {Outlet,Link} from 'react-router-dom'
import './home.css'

class Home extends React.Component {

    render(){
        return(
            <div>
            
                <ul>
                    <li>
                        
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/gitapi'>GitHub Api</Link>
                    </li>
                    <li>
                        <Link to='/wishlist'>WishList</Link>

                    </li>
                </ul>
                <Outlet/>
           </div>
        );
    }
}

export default Home;