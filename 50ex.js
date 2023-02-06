
let x= "John";
let y= "Doe";

console.log (x != y);


function inviaForm() {
    alert ("Inserimento effettuato!");
}
//ESERCIZIO22//
const object = {
    name: 'John' ,
    lastName: 'White' ,
    email: 'john.white@me.com'
}
//ESERCIZIO23//
object.email.pop ()
console.log (object)


//ESERCIZIO26//
const arr = []

while (arr.length < 100) {
  const rand = Math.floor(Math.random() * 101 + 1)
  if (!arr.includes(rand)) {
    arr.push(rand)
  }
}

console.log(arr)

//ESERCIZIO31//
document.getElementById = "container"

