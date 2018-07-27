const defaultState={
    list:[]
}
export default (state=defaultState,action)=>{
    switch (action.type) {
        case "GET_LIST_FULFILLED":
            let stateA=JSON.parse(JSON.stringify(state));
                stateA.list=action.payload;            
            return stateA;
    
        default:
            return state;
    }
}