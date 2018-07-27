import axios from 'axios';
/*
    https://h5.ele.me/restapi/shopping/v1/restaurants/outside_filter/attributes?latitude=28.208012&longitude=112.881993&terminal=h5
*/
export const filterAction=(dispatch)=>{
    dispatch({
        type:"GET_FILTER",
        payload:new Promise((resolve)=>{
        axios.get("/restapi/shopping/v1/restaurants/outside_filter/attributes",{
            params:{
                latitude:28.208012,
                longitude:112.881993,
                terminal:"h5",
            }
        }).then((res)=>{ 
            resolve(res.data)
        }).catch(err=>{
            console.log(err);        
        })
    })
    })
}
