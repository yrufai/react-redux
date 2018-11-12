import { createStore } from "redux";

const add = ({ a, b}, c)=>{
    return a + b + c;
}

console.log(add({ a:1 , b:12 }, 100))

const incrementCount = ({incrementBy = 1 } = {})=> ({
    type : "INCREMENT",
    incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {})=>({
    type: "DECREMENT",
    decrementBy
});

const resetCount = ({reset} = {})=>({
    type: "RESET",
    reset
});


const reducer = (state = { count: 5 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "RESET":
            return {
                count: action.reset
            }
        default:
            return state;
    } 
}
const store = createStore(reducer);

/*const unsubcribe = store.subscribe(()=>{
    console.log(store.getState());
});

/*
store.dispatch({
    type: "INCREMENT",
    incrementBy: 10
}); */

store.dispatch(incrementCount({
    incrementBy : 40
}))

store.dispatch(decrementCount({
    decrementBy : 30
}))


store.dispatch(resetCount({
    reset: 0
}));