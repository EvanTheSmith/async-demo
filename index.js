console.log("Before");
const user = getUser({ id: 1 });
console.log(user);
console.log("After");

function getUser(user_object) {
    setTimeout(() => { 
        console.log("Reading from a database");
        return { id: user_object.id, name: "John Doe" };
    }, 2000);
}