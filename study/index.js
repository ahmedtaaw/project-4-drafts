function createStore () {
    // The store should have four parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state.
    // 4. Update the state
  
    let state
    //new arrow  function
    //it's responsible for returning the state  
    const getState = () => state
    

    //when ever createstore is invoked we want to return an object
    //the object returned has the ability to get the state
    return {
      getState
    }
  }

  const store=createStore();
  store.subscribe(()=>{
    console.log('the subscribed store value is:', store.getState())
  })