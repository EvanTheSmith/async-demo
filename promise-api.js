const p1 = new Promise((resolve) => {
    setTimeout(() => { resolve(1) }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => { resolve(2) }, 2000);
});

// Promise.all([p1, p2]) // activates all the promises
// .then(result => console.log(result)) // results are displayed in an array
// .catch(error => console.log(error.message));

Promise.race([p1, p2]) // activates all the promises
.then(result => console.log(result)) // results of THE FIRST PROMISE TO COMPLETE is displayed 
.catch(error => console.log(error.message));