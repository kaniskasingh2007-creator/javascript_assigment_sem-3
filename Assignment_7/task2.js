class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
  summary() {
    return this.title + ' has ' + this.pages + ' pages';
  }
}
const algoBook = new Book('Algorithms', 320);
console.log(algoBook.summary());