const books = require("./fixtures/books.json");

class Book {
  static records = books;

  constructor(params) {
    this.id = params.id;
    this.nama_buku = params.nama_buku;
    this.penulis = params.penulis;
    this.price = params.price;
  }
  
  // _generateId() {
  //   const lastRecordId =
  //     this.constructor.records[this.constructor.records - 1]?.id || 0;
  //   return lastRecordId + 1;
  // }

  update(params) {
    const idx = this.constructor.records.findIndex((i) => i.id === this.id);

    params.nama_buku && (this.nama_buku = params.nama_buku);
    params.penulis && (this.penulis = params.penulis);
    params.price && (this.price = params.price);

    this.constructor.records[idx] = this;

    return this;
  }

  delete() {
    this.constructor.records = this.constructor.records.filter(
      (i) => i.id !== this.id
    );
  }

  static create(params) {
    const book = new this(params);

    this.records.push(book);

    return book;
  }

  static find(id) {
    const book = this.records.find((i) => i.id === Number(id));
    if (!book) return null;

    return book;
  }

  static list() {
    return this.records;
  }
}

module.exports = Book;
