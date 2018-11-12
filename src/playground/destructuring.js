/*const person = {
    name: "snapsfil",
    age: 45,
    location:{
        city: "Bawku",
        temp: 92
    }
};

const {name="Anonymous", age } = person;
console.log(`${name} is ${age}.` );


const { temp, city:town } = person.location
console.log(`its ${temp} in ${town}`) */

/*const book= {
    title: "Ego is the enemy",
    author: "Ryan Holiday",
    publisher:{
        name: "penguin"
    }
};


const {name : publisherName = "Self-publish" } = book.publisher;
console.log(`the publisher is ${publisherName}`)
*/

const address = ["1299 s juniper street", "Philadephia", "pennsylvania","55665" ];
const [street, city, state, zip]= address;

console.log(`you are in ${city}  ${state}. `)

const item = ["coffee","2.0","$2.5", "2.75"];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice} `)