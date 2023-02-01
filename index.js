console.log("Before");
getUser(1).then(response => console.log(response));
console.log("After");

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            console.log("Reading from a database");
            resolve({ id, name: "John Doe" });
        }, 2000);
    });
}

function getRepositories(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API ...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API ...');
            resolve(['commit']);
        }, 2000);
    });
}