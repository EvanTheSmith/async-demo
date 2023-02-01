const p = new Promise((resolve, reject) => { // generic promise template
    // some promise work is done ... the state is pending //
    
    setTimeout(() =>  { 
        resolve(1); // resolved or fulfilled promise
        // reject(new Error('message')); // rejected promise
    }, 1000); 
});

p.then(result => console.log('Result', result))
.catch(error => console.log('Error', error.message));

// Promises can be immediately resolved or rejected:

const resolved_promise = Promise.resolve({ id: 1 });
const rejected_promise = Promise.reject({ id: 2 });

resolved_promise.then(result => console.log('Resolved Promise: ', result));
rejected_promise.catch(result => console.log('Rejected Promise: ', result));