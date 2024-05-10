
// let a = document.getElementById("one").innerText;
// let b = document.getElementById("two").innerText;
// let result = document.getElementById("result").innerHTML = a + b;
// let myCar = "Lamborghini";
// document.getElementById("carName").innerHTML = myCar;
// const carName = ["volvo", "benz", "toyota"];
// carName[2] = "ferrari";
// document.getElementById("cars").innerHTML = `
// <h1>${carName}</h1>`

// function changeP() {
//     document.getElementById("hello").innerHTML = 'I Love programming';
// }

// let name1 = "David";
// //let name2 = "Amajuoyi";
// name1 += " " + "Amajuoyi"
// //alert(name1);

// let x = 10;
// let z = 5;
// //alert(x * z);
// //alert(x % z);


// //Array Methods

// // push ->  adds an element to the end of the array
// const myArray = [1,2,3,4];
// myArray.push(5);
// //alert(myArray);

// //pop -> removes the last element in an array
// const lastElement = myArray.pop()
// //alert(myArray);

// // unshift -> adds an element to the beginning of an array
// const firstElement = myArray.unshift(0);
// //alert(myArray);

// // shift -> removes an element from the beginning of an array
// const myElement = myArray.shift(0);
// //alert(myArray)

// //splice ->  Removes elements from the array and/or adds new ones at a specific index
// const mySplice = [1,2,3,4,5]
// mySplice.splice(0, 1, 6);  // 0 => the array index to be modified,  1 -> to remove it while 0 is to put something in front,  6 -> the new item
// //alert(mySplice);

// // slice ->  use to copy a set of an array without modifying the original array
// const mySlice = [1, 2, 3, 4];
// const sliced = mySlice.slice(1,3);
// sliced[0] = 0;
// //alert(sliced);

// //concat -> join two or more arrays together
// const myCon = [1, 2, 3];
// const secondCon = [4, 5];
// const allCon = myCon.concat(secondCon);
// //alert(allCon);

// //indexOf ->  Returns the index of the first occurrence of an element
// const index = myCon.indexOf(1);
// //alert(index);

// //forEach -> Executes a function for each element in the array
// myCon.forEach((item, index) => {
//     //alert(`Item: ${item}, Index: ${index}`);
// })

// //map
// /*const numbers = [1, 2, 3, 4];
// const mappedNum = numbers.map(num => num * 2);
// numbers.forEach((item, index) => {
//     alert(`Number: ${item}, Mapped Number: ${mappedNum[index]}`)
// }) */

// const product = ["apple", "banana", "orange"];
// const productObje = product.map((item, index) => ({
//     name: item,
//     id: index,
//     price: index * 50
// }))

// productObje.forEach((item) =>{
//    // alert(`item: ${item.name}`);
// })

// //filter
// const numbers = [1,2,3,4,5,6,7,8,9];
// const even = numbers.filter((num) => num % 2 === 0)

// //alert(even)

// const students = [
//     {name: 'David', score: 100},
//     {name: 'Emmanuel', score: 80},
//     {name: 'Jessica', score: 50},
//     {name: 'treasure', score: 30}
// ]

// const passedStudents = students.filter((student) => student.score >= 50);

// passedStudents.forEach((student) => {
//     //alert(`Student Name: ${student.name}`)
// })

// //sort
// const sortAlphabet = ['c','s','a','d','c'];
// sortAlphabet.sort();
// //alert(sortAlphabet);
// const sortNumbers = [30,10,40,90,48];
// sortNumbers.sort((a, b) => a - b);
// //alert(sortNumbers)


// // build a simple shopping cart

// let shoppingCart = [];

// function addToCart(cart, name, price) {
//     cart.push({name, price})
// }

// addToCart(shoppingCart, "munch it", 200);
// addToCart(shoppingCart, 'bread', 100);
// addToCart(shoppingCart, 'egg roll', 300);

// const cartItem = shoppingCart.map((item) => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} -- ${item.price}`;
//     return li;
// })

// const cartBody = document.getElementById('my-cart');
// cartItem.forEach((item) => {
//     cartBody.appendChild(item);
// })


// // create a playlist and push songs to it

// const playlist = []

// function addSongToPlaylist(songContainer, name, artist) {
//     songContainer.push({
//         name,
//         artist
//     })
// }

// addSongToPlaylist(playlist, 'Over Dem', 'Davido');

// const songs = playlist.map((song) => {
//     const li = document.createElement("li");
//     li.textContent = `Title: ${song.name} -- Artist ${song.artist}`
//     return li;
// })

// songs.forEach((item) => {
//     cartBody.appendChild(item);
// })

// const stackCon = []

// function pushStack(stack, item) {
//     stack.push({
//         item
//     })
// }

// pushStack(stackCon, "Software engineering");

// function popStack(stack) {
//     return stack.pop()
// }

// const popped = popStack(stackCon);
// //alert(popped.item);





///  simple todo list using this array method learnt

// Start with an empty list
const taskList = [];

// Function to add tasks using the push method
function addTask(list, taskDescription) {
    list.push(taskDescription);
}

// Function to remove the first task using the shift method
function removeFirstTask(list) {
    return list.shift(); // Removes the first task
}

// Function to remove the last task using the pop method
function removeLastTask(list) {
    return list.pop(); // Removes the last task
}

// Function to update a task at a specific index using splice
function updateTask(list, index, newTask) {
    if (index >= 0 && index < list.length) {
        list.splice(index, 1, newTask); // Replaces the task at the given index
    }
}

// Function to display tasks
function displayTasks(list) {
    const taskListElement = document.getElementById("task-list");
    taskListElement.innerHTML = ""; // Clear the existing list
    list.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task;
        taskListElement.appendChild(li);
    });
}

// Interactions with buttons and input fields
document.getElementById("add-task").addEventListener("click", () => {
    const taskInput = document.getElementById("task-input");
    addTask(taskList, taskInput.value); // Add the task
    taskInput.value = ""; // Clear the input field
    displayTasks(taskList); // Display the updated list
});

document.getElementById("remove-first").addEventListener("click", () => {
    removeFirstTask(taskList); // Remove the first task
    displayTasks(taskList); // Display the updated list
});

document.getElementById("remove-last").addEventListener("click", () => {
    removeLastTask(taskList); // Remove the last task
    displayTasks(taskList); // Display the updated list
});

document.getElementById("update-task").addEventListener("click", () => {
    const taskIndex = parseInt(document.getElementById("task-index").value);
    const updateInput = document.getElementById("update-input").value;
    updateTask(taskList, taskIndex, updateInput); // Update the task at a given index
    displayTasks(taskList); // Display the updated list
});
