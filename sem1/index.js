const reviewSymbol = Symbol('review');
const retingSymbol = Symbol('reting');
const tagsSymbol = Symbol('tags');

function addMetadata(book, metadataType, data){
    book[metadataType] = data;
}

function getMetadata(book, metadataType) {
    return book[metadataType];
}

let book = {
    title: "1984",
    author: "George Orwell"
};


addMetadata(book, reviewSymbol, "отличная книга о дистопии!");
addMetadata(book, retingSymbol, 5);
addMetadata(book, tagsSymbol, 'distopia');

console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, retingSymbol));
console.log(getMetadata(book, tagsSymbol));

const books = [
    {title: "1984", author: "George Orwell"},
    {title: "Brave New World", author: "Aldous Huxley"},
    {title: "Fahrenheit 451", author: "Ray Bradbury"}
];

const library = {
    books: [...books],
    [Symbol.iterator]: function(){
        let countBooks = 0;
        return {
            next: (() =>{
                if (countBooks >= this.books.length) {
                    return {done: true}
                } else {
                    return {
                        value: this.books[countBooks++],
                        done: false
                    }
                    
                }
            })
        }
    }
}

for (const book of library) {
    console.log(book.author, " - ", book.title);
}

console.log(library);

let lessons = new Map();
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

const Kuznecov = {
    name: "Иван"
}

const Petrov = {
    name: "Петр"
}

const ivanLessons = new Set()
ivanLessons.add('Математика');
ivanLessons.add('История');
const petrLessons = new Set()
petrLessons.add('Иноформатика');
petrLessons.add('География');

let students = new Map();
students.set(Kuznecov, ivanLessons);
students.set(Petrov, petrLessons);

console.log(students);

console.log(`Преподаватель по математике: ${lessons.get('Математика')}`);
console.log(`Иван посетил занятия по: ${[...students.get(Kuznecov)]}`);


