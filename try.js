function outer() {
    let count = 0;

    function inner() {
      console.log(count);
    }
    
    return inner;
  }
  
  const closure = outer();
  closure(); // logs 0
  
  count = 1;
  closure(); // logs 0
  