function createStore(){
/*
In this screencast, we started building out the createStore function. Currently, this factory function:

    takes in no arguments
    sets up a local (private) variable to hold the state
    sets up a getState() function
    returns an object that publicly exposes the getState() function

*/
    let state
    const getState=()=>state

    return{
        getState
    }
}