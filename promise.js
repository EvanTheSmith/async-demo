const p = new Promise((resolve, reject) => { // generic promise template
    setTimeout(() =>  { 
        // resolve(1); 
        reject(new Error('message'));
    }, 1000); 
});

p.then(result => console.log('Result', result))
.catch(error => console.log('Error', error.message));