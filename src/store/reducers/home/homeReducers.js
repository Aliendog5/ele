const defaultState={
    place:"",
    nav:[],
    parts:[],
    sugg:[]
}
export default (state=defaultState,action)=>{
    switch (action.type) {
        case "GET_HOME_PLACE_PENDING":
            let stateA=Object.assign({},state);
                stateA.place="正在识别地址..."
            return stateA;
        case "GET_HOME_PLACE_FULFILLED":
            let stateAA=Object.assign({},state);
                stateAA.place=action.payload
            return stateAA;

        case "GET_HOME_NAV_FULFILLED":       
            let navstateAA=JSON.parse(JSON.stringify(state))
                navstateAA.nav=action.payload
            return navstateAA;
        case "GET_HOME_AD_FULFILLED":       
            let adstateAA=JSON.parse(JSON.stringify(state))
                adstateAA.ad=action.payload
            return adstateAA; 

        case "GET_FIND_PARTS_FULFILLED":       
            let partsstate=JSON.parse(JSON.stringify(state))
            partsstate.parts=action.payload
            return partsstate;  
        case "GET_FIND_SUGGEST_FULFILLED":       
            let suggstate=JSON.parse(JSON.stringify(state))
            suggstate.sugg=action.payload
            return suggstate;        
        default:
            return state;
    }
}