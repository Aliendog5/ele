import React,{Component} from 'react';
import './footer.css';

import {NavLink} from 'react-router-dom';

class FooterCom extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"首页"
        }
    }
    render(){
        return (
            <div id="footer">
                <ul>
                    <li><NavLink to="/home">首页</NavLink></li>
                    <li><NavLink to="/find">发现</NavLink></li>
                    <li><NavLink to="/order">订单</NavLink></li>
                    <li><NavLink to="/my">我的</NavLink></li>
                </ul>
            </div>
        )
    }
}
export default FooterCom