class Book {
  constructor(title, series, author) {
    this.title = title; // title: title
    this.series = series;
    this.author = author;
    this.resources = [];
  }
  // Example of an instance method
  getInformation() {
    return `${this.title} by ${this.author}`;
  }

  // Static method that accepts a variable number
  // of Book instances and returns an array of their titles.
  // Notice the use of a rest parameter (...books)
  // to capture the passed parameters as an array of values.
  static getTitles(...books) {
    return books.map((book) => book.title);
  }
}

const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

const returnOfTheKing = new Book(
  "Return of the King",
  "The Lord of the Rings",
  "Whit"
);

// console.log(fellowshipOfTheRing.getTitles());
console.log(fellowshipOfTheRing)
console.log(returnOfTheKing)
console.log(Book.resources)

// if (fellowshipOfTheRing instanceof Book) {
//   //do some stuff
// }

// const newBook = new Book('Song of Ice and Fire', 'Game of Thrones', 'Old Man Winter');
// // console.log(newBook.getInformation());

// console.log(Book.getTitles([fellowshipOfTheRing, newBook]))