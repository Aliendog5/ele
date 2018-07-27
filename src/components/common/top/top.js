import React,{Component} from 'react';
import './top.css';

class TopCom extends Component {
    render(){
        return (
            <div id="top">
                <div className="goback">=</div>
                <div className="con">{this.props.title}</div>
            </div>
        )
    }
}
export default TopCom