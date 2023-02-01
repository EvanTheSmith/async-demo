const p = new Promise((resolve, reject) => { // generic promise template
    // some promise work is done ... the state is pending //
    
    setTimeout(() =>  { 
        // resolve(1); // resolved or fulfilled promise
        reject(new Error('message')); // rejected promise
    }, 1000); 
});

p.then(result => console.log('Result', result))
.catch(error => console.log('Error', error.message));