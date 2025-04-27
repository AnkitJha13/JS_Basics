# Object destructuring in JavaScript is a syntax that allows you to extract properties from an object and assign them to variables.


// without this object destructuring

const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925
}
const title = book.title;
const author = book.author;
const year = book.year;

console.log(title);  // Output: The Great Gatsby
console.log(author); // Output: F. Scott Fitzgerald
console.log(year);   // Output: 1925



for(let b in book){
    console.log(b + ": " + book[b]);   // loops in Objects
}          

  



// Using Object Destructuring
const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925
};

// Destructuring assignment
const { title, author, year } = book;

console.log(title);  // Output: The Great Gatsby
console.log(author); // Output: F. Scott Fitzgerald
console.log(year);   // Output: 1925
