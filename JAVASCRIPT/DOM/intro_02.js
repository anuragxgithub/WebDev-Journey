
console.log("Hello Javascript!!")

// creating an element
const newElement = document.createElement("h2");
newElement.textContent = "This is written using javascript";
newElement.id = "second";

// select any element
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali is gone!!"
newElement2.id = "third";
newElement2.className = "about-diwali";   // class keyword is already reserved in js
newElement2.classList.add("festival");  // used when we want to add multiple class name easily
newElement2.style.backgroundColor = "pink"
newElement2.style.fontSize = "25px";
newElement2.setAttribute("hello", "ji");

const element2 = document.getElementById("second");
element2.after(newElement2);


console.log(newElement2.getAttribute("class"))


// adding element to list
const list = document.createElement("li");
list.textContent = "List item 1";
const list2 = document.createElement("li");
list2.textContent = "List item 2";
// select the ul element to add this li
const ul = document.getElementById("listing")
// ul.append(list);
// ul.append(list2);
ul.append(list, list2);
const list3 = document.createElement("li");
list3.textContent = "List item 3";
ul.prepend(list3);

// create a list 4 and add it after list item 1 (i.e at third position of ul)
const list4 = document.createElement("li");
list4.textContent = "List item 4";
// console.log(ul.children);
// M_1
// list.after(list4);  
// M_2
ul.children[1].after(list4);  // ul.children is an HTMLCollection (similar to array but not exactly)



// now lets see how to above process will be applicable in real life problem
// Problem Statement: You are given a list of items add it to an unordered list
const arr = ["milk", "halwa", "paneer", "tofu", "tea"]

const ul2 = document.getElementById("uList");
/**
for(let item of arr) {
    listItem = document.createElement("li");
    listItem.textContent = item;
    ul2.append(listItem);
}
    But this one would be not efficient bcz everytime you are appending to ul2
    ui gets modified according to it and created overload for ui
    so to solve this we have something called fragment which will help
    us to append store all items together and appending it all once at one time
*/
const fragment = document.createDocumentFragment();
for(let item of arr) {
    listItem = document.createElement("li");
    listItem.textContent = item;
    fragment.append(listItem);
}
ul2.append(fragment);

/**
You can also think of making your own similar woriking principle of Documentfragment
const array = [];
for(let item of arr) {
    listItem = document.createElement("li");
    listItem.textContent = item;
    array.push(listItem);
}
ul2.append(...array);
But keep in mind:
For small or medium arrays, both are effectively the same in speed.
For very large numbers of elements, DocumentFragment is slightly more efficient and more traditional for performance-focused code.
 */