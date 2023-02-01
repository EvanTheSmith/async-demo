const p = new Promise((resolve, reject) => { // generic promise template
    setTimeout(() =>  { resolve(1); }, 1000); // resolve with value of 1 after 1 second
});

p.then(result => console.log('Result', result));