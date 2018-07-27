import React,{Component} from 'react';
import './find.css';

import FooterCom from '../common/footer/footer';
import TopCom from '../common/top/top';

import {connect} from 'react-redux';
import {findPartsAction,findSuggestAction} from '../../store/actions/createAction';

class Find extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"发现"
        }
    }
    render(){
        // console.log("parts:",this.props.parts);
        // console.log("sugg:",this.props.sugg)
        return (
            <div>
                <TopCom title={this.state.title}/>
                <div className="context">
                    <div className="top_banner"><img src="https://fuss10.elemecdn.com/e/ef/65b0eafea6c80307be128b5d23e37gif.gif" alt=""/></div>
                    <div className="parts">
                        <ul className="listlift">
                            {
                               
                                this.props.parts.map((item,index)=>{
                                    return <li key={index}>
                                                <h2>{item.title}</h2>
                                                <p>{item.subtitle}</p>
                                                <img src={this.handleToImg(item.main_pic_hash)} alt=""/>
                                            </li>                               
                                })
                               
                            }
                        </ul>
                    </div>
                    <div className="suggest">
                            <div className="tit">限时好礼</div>
                            <p className="jinbi">金币换豪礼</p>
                            <ul>
                                {
                                    this.props.sugg.map((item,index)=>{
                                        if(index<3){
                                            return <li key={index}>
                                            <div className="ss">{item.corner_marker}</div>
                                            <img src={this.handleToImg(item.image_hash)} alt=""/>
                                            <div>{item.title}</div>
                                            <div><span className="reddd">{item.points_required}金币</span>  <span className="huanianx">{item.original_price}</span></div>                                        
                                        </li>
                                        }
                                    })
                                }
                            </ul>
                    </div>
                    <p className="lookmore">查看更多 ></p>
                </div>
                <FooterCom/>
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
        this.props.getFindData()
    }
}
const mapDispatchToProps=(dispatch)=>({
    getFindData:function(){
        findPartsAction(dispatch)
        findSuggestAction(dispatch)
    }
})
const mapStateToprops=(state)=>({
    parts:state.homeReducers.parts,
    sugg:state.homeReducers.sugg,
})
export default connect(mapStateToprops,mapDispatchToProps)(Find)

/*
https://h5.ele.me/restapi/member/v1/discover?platform=1&block_index=0

https://h5.ele.me/restapi/member/gifts/suggest
*/