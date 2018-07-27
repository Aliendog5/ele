const defaultState={
    sort:[]
}
export default (state=defaultState,action)=>{
    switch (action.type) {        
        case "GET_FILTER_FULFILLED":
            let stateAA=JSON.parse(JSON.stringify(state))
                stateAA.sort=action.payload
            return stateAA;            
        default:
            return state;
    }
}