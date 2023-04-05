import {React, Component} from "react";
import './wish.css';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import FileUploadIcon from '@mui/icons-material/FileUpload';

class wish extends Component {

    constructor(props){
        super(props);
        this.state = {
            display : true,
            text : this.props.text,
        }
    }

    returnPriority(){
        if (this.props.priority === 'High') {
            return <div className="highPrior"></div>
        }
        else {
            if (this.props.priority === 'Medium'){
                return <div className="mediumPrior"></div>
            }
            else {
                return <div className="lowPrior"></div> 
            }
        }
                         
      
    }


    changeDisplay = () => { 
        this.setState({display:false})
    }

    render () {
        if (this.state.display === true) {
            return (
                <div className="wish" id={this.props.text}>
                    
                    <div className="text">
                        <p>{this.props.number}</p>
                        <p>.</p>
                        <p> {this.props.text}</p>
                    </div>
                    <div class='temp'>
                    {this.returnPriority()}
                        <div className="btns">
                            <div className="dltDiv">
                                <DeleteForeverRoundedIcon className="dltBtn" onClick = {()=> this.setState({display: false})}></DeleteForeverRoundedIcon>
                            </div>
                            <div className='editBtn'>
                                <EditIcon onClick = {()=>this.props.editTask(this.props.text, this.props.priority,this.changeDisplay)} />
                            </div>
                            <div class='moveUpBtn'>
                                <FileUploadIcon onClick = {()=> this.props.moveUp(this.props.number)}/>
                            </div>
                        </div>
                    </div>    
                </div>
            );
        }

    }

}

export default wish;