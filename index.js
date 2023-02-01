// getUser(1, (user) => { // callback syntax
//     getRepositories(user.name, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// }

// Promise Syntax
// getUser(1)
// .then(user => getRepositories(user.name))
// .then(repo => getCommits(repo[0]))
// .then(commits => console.log('Commits', commits))
// .catch(error => console.log("Errors: ", error.message));

// Async/Await Syntax
async function displayCommits() {
const user = await getUser(1);
const repos = await getRepositories(user.name);
const commits = await getCommits(repos[0]);
console.log(commits);
}
displayCommits();

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
            console.log('Getting commits ...');
            resolve(['commit']);
        }, 2000);
    });
}