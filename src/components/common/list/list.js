
import React,{Component} from 'react';
import './list.css';

import {connect} from 'react-redux';

import {listAction} from '../../../store/actions/listAction';

class ListCom extends Component {
    render(){  
        let imgs=[];
        this.props.list.map((it,i)=>{
             imgs.push(this.props.list[i].restaurant.image_path);
        })       
        return (
            <div id="list">
              <ul>
                  {
                      this.props.list.map((item,index)=>{
                          return <li key={index}>                              
                                    <div className="index-shopInfo">
                                        <div className="img"><img src={this.handleToImg(imgs[index])} alt="png"/></div>
                                        <div className="shop">
                                            <div><h3>{item.restaurant.name}</h3></div>
                                            <div>
                                                <span></span>
                                                <span>月售{item.restaurant.distance}单</span>
                                            </div>
                                            <div className="pr">
                                                <div>
                                                {/* float_minimum_order_amount */}
                                                    <span>￥{item.restaurant.float_minimum_order_amount}起送 <span className="shu">|</span> </span>
                                                    <span>{item.restaurant.piecewise_agent_fee.description}</span>
                                                </div>
                                                <div className="km">
                                                    <span>{item.restaurant.distance/1000}km<span className="shu">|</span> </span>
                                                    <span>{item.restaurant.order_lead_time}分钟</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="index-activityWrap">
                                        <div className="sj nowrap">
                                            <div>
                                                <span className="greenn">首</span>
                                                <span>{item.restaurant.activities[0].tips}</span>
                                            </div>
                                            <div className="jian">
                                                <span className="redd">{item.restaurant.activities[1]?"减":""}</span>
                                                <span>{item.restaurant.activities[1].tips}</span>
                                            </div>
                                        </div>
                                        <div className="ac">{item.restaurant.activities.length}个活动</div>
                                    </div>
                                </li>
                      })
                  }
              </ul>
            </div>
        )
    }
    handleToImg(hash){     
        let imgUrl="http://fuss10.elemecdn.com/";
        if(hash.indexOf("jpeg")!==-1){
            return imgUrl+hash[0]+"/"+hash[1]+hash[2]+"/"+hash.slice(3)+".jpeg"
        }
        if(hash.indexOf("png")!==-1){           
             return imgUrl+hash[0]+"/"+hash[1]+hash[2]+"/"+hash.slice(3)+".png"
        }
    }
    componentDidMount(){       
        this.props.getListData();
    }
}
const mapDispatchToProps=(dispatch)=>({
    getListData:function(){       
        listAction(dispatch)
    }
})

const mapStateToProps=(state)=>({
    list:state.commReducers.list
})
export default connect(mapStateToProps,mapDispatchToProps)(ListCom)