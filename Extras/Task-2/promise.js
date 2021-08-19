const myFirstPromise = new Promise((resolve, reject) => { 
    const condition = true;   
    if(condition) {
         setTimeout(function(){
             resolve("Promise is totally fulfilled"); 
        }, 300);
    } else {    
        reject('Promise is rejected!');  
    }
});

//using the promise would be
const myFirstPromise = new Promise((resolve, reject) => { 
    const condition = true;   
    if(condition) {
         setTimeout(function(){
             resolve("Promise is resolved!"); // fulfilled
        }, 300);
    } else {    
        reject('Promise is rejected!');  
    }
});

// adding promise inside the function .
const funcPromise= function() {
    myFirstPromise
    .then((successMsg) => {
        console.log("Success:" + successMsg);
    })
    .catch((errorMsg) => { 
        console.log("Error:" + errorMsg);
    })
  }
  
  funcPromise();

// Promise chaining 
const helloPromise  = function() {
    return new Promise(function(resolve, reject) {
      const message = `Hi, How are you!`;
  
      resolve(message)
    });
  }

  const chainPromise= function() {

    myFirstPromise
    .then(helloPromise)
    .then((successMsg) => {
        console.log("Success:" + successMsg);
    })
    .catch((errorMsg) => { 
        console.log("Error:" + errorMsg);
    })
  }
  
  chainPromise();

  