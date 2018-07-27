import React,{Component} from 'react';
import './order.css';

import TopCom from '../common/top/top';
import FooterCom from '../common/footer/footer';

class Order extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"订单"
        }
    }
    render(){
        return (
            <div>
                <TopCom title={this.state.title}/>
                <div className="context">
                   <div className="nologin">
                       <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt=""/>
                       <h3>登录后查看外卖订单</h3>
                       <button>立即登录</button>
                   </div>
                </div>
                <FooterCom/>
            </div>
        )
    }
}
export default Order