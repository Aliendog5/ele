import React,{Component} from 'react';
import './filter.css';

import {connect} from 'react-redux';

import {filterAction} from '../../../store/actions/filterAction';

class FilterCom extends Component {   
    render(){     
        return (
            <div id="filter">
               <ul>
                   <li>{this.props.sort.inside_sort_filter?this.props.sort.inside_sort_filter[0].name:""} </li>
                   <li>{this.props.sort.outside_sort_filter?this.props.sort.outside_sort_filter[0].name:""}</li>
                   <li>{this.props.sort.outside_sort_filter?this.props.sort.outside_sort_filter[1].name:""}</li>
                   <li>筛选</li>
               </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.getFilterData();
    }
}
const mapDispatchToProps=(dispatch)=>({
    getFilterData:function(){       
        filterAction(dispatch)
    }
})

const mapStateToProps=(state)=>({
    sort:state.filterReducers.sort
})
export default connect(mapStateToProps,mapDispatchToProps)(FilterCom)