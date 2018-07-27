/*

latitude:28.208305,
                longitude:112.884861,
                offset:0,
                limit:8,
                extras:["activities","tags"],
                extra_filters:"home",
                terminal:"h5"
*/
/*
https://h5.ele.me
/restapi/shopping/v3/restaurants
*/ 
import axios from 'axios';
export const listAction=(dispatch)=>{
    dispatch({
        type:"GET_LIST",
        payload:new Promise((resolve)=>{
        axios.get("/restapi/shopping/v3/restaurants",{
            params:{
                latitude:28.208305,
                longitude:112.884861,
                offset:0,
                limit:8,
                extras:["activities","tags"],
                extra_filters:"home",
                terminal:"h5"
            }
        }).then((res)=>{   
            resolve(res.data.items)
        }).catch(err=>{
            console.log(err);        
        })
    })
    })
}
