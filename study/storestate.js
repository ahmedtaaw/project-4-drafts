function createStore(){
/*
In this screencast, we started building out the createStore function. Currently, this factory function:

    takes in no arguments
    sets up a local (private) variable to hold the state
    sets up a getState() function
    returns an object that publicly exposes the getState() function
    ---
Thinking about the code we just wrote, what does the getState() function do?
*it returns the existing state variable
*/
    let state
    let listeners=[]

    const getState=()=>state

    const subscribe = (listener)=>{
        listeners.push(listener)
    }

    return{
        getState,
        subscribe
    }
}