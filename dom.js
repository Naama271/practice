window.onload = function() {
// Make a div
// add a class of wrapper to it
// put it into the body
let div3 = document.createElement("div")
div3.classList.add("wrapper")
document.body.appendChild(div3)

// make unsorted list
// add 3 list items (1,2,3) in them
// put that list above the wrapper
let unsortlist = document.createElement("ul")
let li = document.createElement("li")
unsortlist.appendChild(document.createElement("li"))
unsortlist.appendChild(document.createElement("li"))
unsortlist.appendChild(document.createElement("li"))



wrappper = document.getElementsByClassName("wrapper")
document.body.appendChild(unsortlist)

// create an image
// set the src of the image
// set the width to 250px
// add a class of cute
// add an alt of cute puppy
let image = document.createElement("img")
image.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*"
image.width = "250"
image.classList.add("cute")
image.alt = "cute puppy"
document.body.appendChild(image)

// make a div with two paragraph in it with an html string
// put this div before the unsorted list
// add a class to the second paragraph called warning
// remove the first paragraph

let div1 = document.createElement("div");
let ul = document.getElementsByTagName("ul")[0]
let parentDiv = ul.parentNode
console.log(parentDiv)
parentDiv.insertBefore(div1,ul)
let p1 = document.createElement("p");
p1.innerHTML = "this is the text of p1"
let p2 = document.createElement("p");
p2.innerHTML = "this is the text of p2"
p2.classList.add("warning");
div1.appendChild(p1)
div1.appendChild(p2)

p2.remove()


// create a func called generatePlayerCard that takes 3 args (name,age,height)
// have that function return html that looks like this:
// <div class='player-card'>
/* <h2>NAME - AGE</h2>
<p>Height: HEIGHT
age in dog years: AGE*7</p> */
// </div>
function generatePlayerCard(name,age,height) {
    let div = document.createElement("div")
    div.classList.add('player-card')

    div.innerHTML = `<h2>${name} - ${age}</h2>
    <p>Height: ${height}</br>
    age in dog years: ${age*7}</p>`

    console.log( div )
}

generatePlayerCard("naama",33,1.60)

// make a new div with the class of cards
// have that function make 4 cards
// append those cards to the div
// put the div in the dom before the wrapper elemnt
// add delete button to each card


function addCard(times){

    newDiv =document.createElement("div")
    
for (i=0; i<times; i++){
    
    let button = document.createElement("button")
    let div = document.createElement("div")
    div.classList.add("card")
    div.appendChild(button)
    // console.log(button)
    // console.log(div)
    // let card = document.createElement("div").classList.add("card")
    // console.log(card)
    

    newDiv.appendChild(div)
    // console.log(card)
}console.log( newDiv)
}



addCard(4)

}