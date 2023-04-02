import './App.css';
import { Component, useState } from 'react';
import React from 'react';
import Wish from './compnents/wish/wish';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

var taskText  = ' ';


class App extends React.Component {

  initial = [<Wish text='Base Task'></Wish>,<Wish text='Base Task'></Wish>,<Wish text='Base Task'></Wish>,]
 
  constructor (){
    super();
    this.state = {
      tasks : [<Wish text='Base Task'></Wish>]
    }
  }
  
  taskTyped = (event) => {
    taskText = event.target.value;
  }


  addTask =  () => {
    var temp = this.state.tasks;
    temp.push(<Wish text={taskText}></Wish>);
    console.log(temp)
    this.setState({tasks:temp});
  }

  render (){
    return (
      
      <div>
        <h1 className='heading'>Wish List</h1>
        <div className='container'>
          <div className='inptContainer'>
              <input type={'text'} onChange={this.taskTyped} className='taskText' placeholder={'Enter Task'}></input>
              <AddCircleRoundedIcon className='addBtn' onClick={this.addTask}></AddCircleRoundedIcon>            
          </div>


          <div id='wished' className='wishContainer'>
              {this.state.tasks}
          </div>
        </div>
      </div>

    );
  
  }
}

export default App;
