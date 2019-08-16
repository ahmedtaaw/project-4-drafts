function createStore () {
    // The store should have four parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state.
    // 4. Update the state
  
    let state
    //new arrow  function
    let listeners=[]
    //it's responsible for returning the state  
    const getState = () => state
    const getListeners = () => listeners
    const subscribe = (listener)=>{
      listeners.push(listener)
      console.log(listeners)
        console.log(listener)
        console.log(listeners.filter((l)=>l !==listener))
      return()=>{
        listeners=listeners.filter((l)=>l !==listener)
        
      //  console.log("@@@@"+createStore.getListeners)
      }
    }

    //when ever createstore is invoked we want to return an object
    //the object returned has the ability to get the state
    return {
      getState,
      subscribe
    }
  }
//console.log(createStore.getListeners)
const store = createStore()
//console.log(store.subscribe())
store.subscribe(()=>{
  console.log('the new state is: ',store.getState())
  //console.log(store.getListeners)
})
store.subscribe(()=>{
  console.log('the store changed')
  //console.log(store.getListeners)
})
store.subscribe(()=>{
  console.log('the store changed')
  //console.log(store.getListeners)
})
//console.log(store.getListeners)