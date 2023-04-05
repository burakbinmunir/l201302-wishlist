import React from "react";
import './App.css';
import Gitapi from "./compnents/gitapi/gitapi";
import WishList from './compnents/wish/wishlist'

class App extends React.Component {
  constructor()
  {
    super();
  }

  render () {
    return (
      <div>
        <WishList/>
      </div>
    );
  }
}

export default App;