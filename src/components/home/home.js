import React,{Component} from 'react';
import './home.css';

import {connect} from 'react-redux';

import {homePlaceAction,homeNavAction,homeAdAction} from '../../store/actions/createAction';

import HeaderCom from '../common/header/header';
import FooterCom from '../common/footer/footer';
import SearchCom from '../common/search/search';
import FilterCom from '../common/filter/filter';
import ListCom from '../common/list/list';

//导航栏走马灯  antd
import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

//下拉刷新    BScroll
import BScroll from 'better-scroll'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[1,2]
        }
    }
    render(){        
        return (
            <div>
                <HeaderCom place={this.props.place}/>
                <SearchCom/>
                <div className="content-home" id="wrapper">
                <div id="content">
                    <div>
                    <div className="content-home">
                    <div id="nav">
                        <WingBlank>
                            <Carousel  infinite>
                            {
                                this.state.data.map((dd,ii)=>{                                   
                                        if(ii===0){
                                            return <ul key={ii}>
                                                {
                                                    this.props.nav.map((item,index)=>{
                                                        if(index!==this.props.nav.length-1){
                                                            return <li key={index}>
                                                                <img src= {this.handleToImg(item.image_hash)} alt=""/>
                                                                <span>{item.name}</span>
                                                            </li>
                                                        }
                                                    })
                                                }
                                            </ul>
                                        }else{
                                            return <ul className="nav_last" key={ii}>
                                                {
                                                    this.props.nav.map((item,index)=>{
                                                        if(index===this.props.nav.length-1){
                                                            return <li key={index}>
                                                                <img src= {this.handleToImg(item.image_hash)} alt=""/>
                                                                <span>{item.name}</span>
                                                            </li>
                                                        }
                                                    })
                                                }
                                            </ul>
                                        }
                                   
                                })
                            }
                            </Carousel>
                        </WingBlank>
                    </div>

                    <div id="ad">
                        <div className="ad_main">
                            <h3>品质套餐</h3>
                            <p>搭配齐全吃得好</p>
                            <p>立即抢购 ></p>
                            <img src="http://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png" alt=""/>
                        </div>
                        <div className="ad_main">
                            {/* <h3>{this.props.ad[0]?this.props.ad[0].name:""}</h3> */}
                            {/* <p>{this.props.ad[0]?this.props.ad[0].description:""}</p> */}
                            <p>立即抢购 ></p>
                            <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png" alt=""/>
                        </div>
                    </div>

                    <div className="shoplist-title">
                            <span>--- 推荐商家 ---</span>
                    </div>
                    <FilterCom/>
                    <ListCom/>
                    </div>
                 </div>    
                </div>
                </div>
                <FooterCom/>
            </div>
        )
    }
    /*
    img_hash:
                                 7d8a867c870b22bc74c87c348b75528djpeg
    http://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg
    
    */ 
   handleToImg(hash){
       let imgUrl="http://fuss10.elemecdn.com/";
       if(hash.indexOf("jpeg")){
           return imgUrl+hash[0]+"/"+hash[1]+hash[2]+"/"+hash.slice(3)+".jpeg"
       }else if(hash.indexOf("png")){
            return imgUrl+hash[0]+"/"+hash[1]+hash[2]+"/"+hash.slice(3)+".png"
       }
   }
    componentDidMount(){
        this.props.getHomeData()
    }
    componentDidUpdate(){
        const scroll = new BScroll('#wrapper')
    }
}
const mapDispatchToProps=(dispatch)=>({
    getHomeData:function(){
        homePlaceAction(dispatch)
        homeNavAction(dispatch)
        homeAdAction(dispatch)
    }
})

const mapStateToProps=(state)=>({
    place:state.homeReducers.place,
    nav:state.homeReducers.nav,
    ad:state.homeReducers.ad
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)