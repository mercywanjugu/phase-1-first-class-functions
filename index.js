function receivesAFunction(callback) {
    return callback();
  }
  
  function returnsANamedFunction() {
    return function namedC() {
  
    };
  }
  
  function returnsAnAnonymousFunction(){
      return function(){
      };
  }