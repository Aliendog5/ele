import axios from 'axios';

export const homePlaceAction=(dispatch)=>{
    dispatch({
        type:"GET_HOME_PLACE",
        payload:new Promise((resolve)=>{
        axios.get("/restapi/bgs/poi/reverse_geo_coding",{
            params:{
                latitude:28.208305,
                longitude:112.884861
            }
        }).then((res)=>{          
            resolve(res.data.name)
        }).catch(err=>{
            console.log(err);        
        })
    })
    })
}
/*
    https://h5.ele.me
    /restapi/shopping/openapi/entries
    ?latitude=28.208012
    &longitude=112.881993
    &templates[]=main_template
    &templates[]=favourable_template
    &templates[]=svip_template
    &terminal=h5
*/ 
export const homeNavAction=(dispatch)=>{
    dispatch({
        type:"GET_HOME_NAV",
        payload:new Promise((resolve)=>{
        axios.get("/restapi/shopping/openapi/entries",{
            params:{
                latitude:28.208012,
                longitude:112.881993,
                templates:["main_template","favourable_template","svip_template"],               
                terminal:"h5",
            }
        }).then((res)=>{      
            resolve(res.data[0].entries)
        }).catch(err=>{
            console.log(err);         
        })
    })
    })
}
export const homeAdAction=(dispatch)=>{
    dispatch({
        type:"GET_HOME_AD",
        payload:new Promise((resolve)=>{
        axios.get("/restapi/shopping/openapi/entries",{
            params:{
                latitude:28.208012,
                longitude:112.881993,
                templates:["main_template","favourable_template","svip_template"],               
                terminal:"h5",
            }
        }).then((res)=>{                   
            resolve(res.data[1].entries)
        }).catch(err=>{
            console.log(err);         
        })
    })
    })
}
/*
    https://h5.ele.me
    /restapi/member/v1/discover
    platform:1,
    block_index:0

    https://h5.ele.me
    /restapi/member/gifts/suggest
*/
export const findPartsAction=(dispatch)=>{
    dispatch({
        type:"GET_FIND_PARTS",
        payload:new Promise((resolve)=>{
        axios.get("/restapi/member/v1/discover",{
            params:{
                platform:1,
                block_index:0
            }
        }).then((res)=>{                   
            resolve(res.data["1"])
        }).catch(err=>{
            console.log(err);         
        })
    })
    })
}
export const findSuggestAction=(dispatch)=>{
    dispatch({
        type:"GET_FIND_SUGGEST",
        payload:new Promise((resolve)=>{
        axios.get("/restapi/member/gifts/suggest").then((res)=>{                       
            resolve(res.data)
        }).catch(err=>{
            console.log(err);         
        })
    })
    })
}

