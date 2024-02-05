const fs = require('fs');
const bookList = JSON.parse(fs.readFileSync('data.json', 'utf8'));

class Library {
    #books = [];

    constructor(initialBookList) {
        let arrBook = [];

        for (let i = 0; i < initialBookList.length; i++) {
            arrBook[i] = initialBookList[i].title;
        }
        const uniqueList = [...new Set(arrBook)]
        if (uniqueList.length !== arrBook.length) {
            throw new Error ('Список содержит дубликаты');
        }
        this.#books = arrBook;
    }

   
    get allBooks () {
        return this.#books.join(', ');
    }

    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error ('Ошибка: Такая книга уже есть');
            }
            if (typeof title === 'object') {
                title = title.title;
            }
            this.#books.push(title);
            return this.#books.join(', ');
        } catch (error) {
            return error.message;
        }
    }

    removeBook(title) {
        try {
            if (!this.#books.includes(title)) {
                throw new Error ('Ошибка: Такой книги нет в списке')
            }
            const titleId = this.#books.indexOf(title);
            this.#books.splice(titleId, 1);
            return this.#books.join(', ');
        } catch (error) {
            return error.message;
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

// const bookList = [
//     {title: "1984", author: "George Orwell"},
//     {title: "Brave New World", author: "Aldous Huxley"},
//     {title: "Fahrenheit 451", author: "Ray Bradbury"}
// ];

let library = new Library(bookList);
console.log(library.allBooks);

console.log(library.addBook({title: 'Geography', author: "Jim"})); 
console.log(library.addBook('Biology')); 
console.log(library.addBook('1984'));

console.log(library.removeBook('Biology')); 
console.log(library.removeBook('Fairytales')); 

console.log(library.hasBook('1984')); 
console.log(library.hasBook('Biology')); 

 
