// Document Object Model

/*
    DOM is the data representation of teh objets that comprise the structure and content of a document on the web. It contains but is not limited to:
        - Document
        - Head
            - Meta tags
            - Titile Tafs
            - Link Tags
        - Body
            - Nav
            - Header
            - Divs
            - H1s and so on 
        - And any of their attributions
    

*/

// Creating out very first element.
// let h1tag = document.createElement("h1")
// h1tag.style.color = "blue"
// h1tag.innerText = "Welcome to the Document Object Model"
// document.body.appendChild(h1tag)


// OFF Topic: Accessing device configuration with DOM
let info = navigator.oscpu
console.log(info)

// Accessing element using getElementId
let listTitle = document.getElementById("listTitle")
console.log(listTitle)
listTitle.innerText = "Hermione's To-Do Grocery List"

// Accessing elements using querySelector

/*
    Most versatile of all selectors.
        - accesses first element if there's more than one
        - returns null if no element is found
        - access the element by name. .class or #id
*/

//let listItem = document.querySelector("ul li")
let listItem = document.querySelector(".listItem")
console.log(listItem)
listItem.style.textAlign = "center"
listItem.style.color = "red"

//Access Multiple Elements
/*
    When we access multiple elements and no list is returned.
        Not an array, but works like one.
        Can access different nodes by using [index]
        Can access element by array notation ot item method
    Can access multiple elemnts using: 
        getElementsByClassName()
        getElementsByTagName()
        querySelectorAll()

*/

let groceries = document.getElementsByClassName("groceryItem")
//Works like an array but its not
console.log(groceries instanceof Array)
console.log(groceries[0]) 
//Accessing first instance of groceryItem class
groceries[0].innerText = "Fin the Mandrake"
console.log(groceries.item(2))

// Accessing ALL li tags in our index.html file using HTMLCollection
let liTag = document.getElementsByTagName("li")
console.log(liTag)

let selectALL = document.querySelectorAll("ul li")
console.log(selectALL)

/*
This newly created element will shop up  under HTMLCollection, but it will not show up with nodeList.
The reason why is because HTMLCollection is dynamic whereas NodeList is static.
*/

// let newListItem = document.createElement("li")
// let groceryList = document.getElementById("groceryList")
// groceryList.appendChild(newListItem)
// newListItem.innerText = "Test of dynamic vs static (hint: look inside console.log)"

// Difference between HTMLCollection & nodeList
/*
    -both are collections of DOM nodes
    -Node is used as a generic term for everything
    -HTMLCollection object is an array-like list of HTML elements
*/ 


//DOM Tree & Access Nodes

//Displays ALL nodes of the body element as a nodeList
console.log(document.body.childNodes)
//Whitespace isnide elements == text
//Text == nodes
//All can be accessed by index numbers starting at [0]

console.log(document.body.children)
/*
    Properties:
        -first(Element)Child - first element of node 
        -last(Element)Child - last element of node
        -parent(Element)Node - access parent node of element 
        -next(Element)Sibling - element next to the one accessed
        -previous(Element)Sibling - previous to the one accessed

*/

let listDiv = document.getElementById("list")
console.log(listDiv.firstChild)
console.log(listDiv.firstChild.nextSibling.nextSibling)

//Adding text using DOM
// .innerText property
// .innerHTML - specifies HTML content of an element


//Use a loop to get each element in liTag HTMLCollection and change their properties as shown.
for(tag of liTag) {
    //console.log(tag)
    tag.style.fontFamily = "cursive"
    tag.style.color ="blue"
}

//Reassign 5th [index 4] list item of all listItem classes
//document.getElementsByClassName("ListItem")[4].innerText = "Yell at Harry"

//Event Listening
/*

Event Listener allows us to execute a function when a particular event occurs using .addEventListener()
    - .addEventListener takes an event and a callback function to work
    - Even => is what happens 
    - Callback function => a function that executes when the event occurs.

*/

let button = document.getElementById("clickMe")
// button.addEventListener("click", e => console.log("The button has been clicked") )

button.addEventListener("click", (event) => {
    //shows the event (button) being clicked
    console.log(event.targe)
    console.log("Button hit!")
    // change the color of button after clicked
    event.target.style.backgroundColor = "lightBlue"
})


let textInput = document.getElementById("listInput").value
console.log(textInput)

button.addEventListener("click", (e) => {

    let textInput = document.getElementById("listInput").value

    let newGroceryItem = document.createElement("li") //child node created

    let groceryList = document.getElementById("groceryList") //parent node linked

    newGroceryItem.innerText = textInput

    groceryList.appendChild(newGroceryItem)
})


