import React from "react";
import './App.css';
import WishList from './compnents/wish/wishlist'
import Home from "./compnents/Home/home";
import GitApi from "./compnents/gitapi/gitapi";


import { BrowserRouter, Route,Routes } from "react-router-dom";

class App extends React.Component {
  constructor()
  {
    super();
  }

  render () {
    return (
      <div>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}>
                    
                        <Route path="gitapi" element={<GitApi/>}/>
                        <Route path="wishlist" element={<WishList/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;