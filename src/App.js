import React from "react";
import './App.css';
import Gitapi from "./compnents/gitapi/gitapi";

class App extends React.Component {
  constructor()
  {
    super();
  }

  render () {
    return (
      <div>
        <Gitapi />  
      </div>
    );
  }
}

export default App;