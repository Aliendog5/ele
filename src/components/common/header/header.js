import React,{Component} from 'react';
import './header.css';

class HeaderCom extends Component {
    render(){
        return (
            <div id="header">
                <ul>
                    <li className="place">{this.props.place}</li>
                </ul>
            </div>
        )
    }
}
export default HeaderCom