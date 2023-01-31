console.log("Before");
getUser({ id: 1 }, (user) => console.log(user));
console.log("After");

function getUser(user_object, callback) {
    setTimeout(() => { 
        console.log("Reading from a database");
        callback({ id: user_object.id, name: "John Doe" });
    }, 2000);
}