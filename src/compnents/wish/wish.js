import {React, Component} from "react";
import './wish.css';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import $ from 'jquery';
import { display } from "@mui/system";

class wish extends Component {

    constructor(props){
        super(props);
        this.state = {
            display : true,
            text : this.props.text,
        }
    }

    render () {
        if (this.state.display === true) {
            return (
                <div className="wish" id={this.props.text}>
                    <div className="doneDiv">
                        <CheckCircleRoundedIcon className='doneBtn'  onClick={() => this.setState({display: false})} ></CheckCircleRoundedIcon>
                    </div>
                    <div className="text">
                        <p> {this.state.text}</p>
                    </div>
                    <div className="dltDiv">
                        <DeleteForeverRoundedIcon className="dltBtn" onClick = {()=> this.setState({display: false})}></DeleteForeverRoundedIcon>
                    </div>
                </div>
            );
        }

    }

}

export default wish;