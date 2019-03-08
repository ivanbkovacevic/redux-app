const initState={
    interval:33,
    count:0,
        posts:[
            {id:1,title:"jedan"},
            {id:2,title:"dva"},
            {id:3,title:"tri"},
        ]
}

const rootReducer =(state=initState,action)=>{
    console.log(action)
    switch(action.type){
        case 'INCREMENT' :
        return {
            ...state,
            count:state.count+action.howMuch
        };
        case 'DECREMENT' :
        return {
            ...state,
            count:state.count-action.howMuch
        }
    }
  
    return state;
}

export default rootReducer;