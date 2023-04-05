import './wishlist.css';
import React from 'react';
import Wish from './wish';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import $ from 'jquery';


class wishlist extends React.Component {

  initial = [<Wish text='Base Task'></Wish>,<Wish text='Base Task'></Wish>,<Wish text='Base Task'></Wish>,]
 
  constructor (){
    super();
    this.state = {
      tasks : [<Wish number={1} text='Base Task' priority='High' editTask = {this.editTask.bind(this)} moveUp = {this.moveUp.bind(this)}></Wish>],
      priority: 'none',
      taskText:''
    }
  }
    
  taskTyped = (event) => {
    this.setState({taskText : event.target.value});
  }

  moveUp = (number) => {    
        var newTask = [];
        var no = number -1;
        console.log(no)
        newTask.push(this.state.tasks.at(no));
        var i = 0;
        while( i < this.state.tasks.length) {
           if (i != no){
            newTask.push(this.state.tasks.at(i));
          }
          i++;
        }
       console.log(newTask)
      
       this.setState({tasks:newTask});
      
   
  }

  addTask =  () => {
    if (this.state.taskText.length > 1){
      var temp = this.state.tasks;
      temp.push(<Wish number = {this.state.tasks.length + 1} text={this.state.taskText} priority={this.state.priority} editTask = {this.editTask.bind(this)} moveUp = {this.moveUp.bind(this)} ></Wish>);
      this.setState({tasks:temp});
      this.state.taskText = ''
      $('.taskText').val('')
      $('#selectPriority').val('None')
    }
  }

  editTask = (text,priority,display) => {
    console.log("Edit button clicked");
    this.setState({taskText:text});
    $('.taskText').val(text)
    if (priority === 'High')
      $('#selectPriority').val('High')
    if (priority === 'Medium')
      $('#selectPriority').val('Medium')
    if (priority === 'Low')
      $('#selectPriority').val('Low')
    display();
  }

  render (){
    return (
      
      <div>
        <h1 className='heading'>Wish List</h1>
        <div className='container'>
          <div className='inptContainer'>
              <input  type={'text'} onChange={this.taskTyped} className='taskText' placeholder={'Enter Task'}></input>
              
              <select id='selectPriority' onChange={(event)=>{this.setState({priority:event.target.value})}}>
                  <option  value='None'>None</option>
                  <option style={{color:"red"}} vlaue='High'>High</option>
                  <option  style={{color:"yellow"}}vlaue='Medium'>Medium</option>
                  <option style={{color:"green"}} value='Low'>Low</option>
              </select>
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

export default wishlist;
