//1. Array operations

const array = [1, 2, 3, 4, 5]

const head = ([first]) => first;

const tail = ([, ...rest]) => rest;

const init = (array) => array.slice(0,-1);

const last = (array) => array[array.length - 1];

const last2 = (array) => array.slice(-1);

//2. Concat operations

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [11,12];
const array4 = [13,14];

const concat = ([...array1], [...array2]) =>[...array1, ...array2];

const concat2 = (...arguments) =>{
    const combined = [];
    arguments.forEach(element => element.forEach(element => combined.push(element)));
    return combined;    
};

//3. Clone Merge

const object1 = {
    number: 1, pet: "cat", property:{city: "Madrid",country:"Spain" }
}
const object2 = {number: 2, pet: "perro", property:{city: "Paris", country:"France"}, car:true
}

const clone = ({...object} = {}) => object;

const merge = ({...source}, {...target}) => {
    const map = new Map(Object.entries(target))  
    const map2 = new Map(Object.entries(source))
    const finalMap = new Map([...map, ...map2]);
    return Object.fromEntries(finalMap);
}

//4. Read Books

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

const isBookRead = (books, titleToSearch) => {
    let book = books.find( book => book.title === titleToSearch)
    return book?book.isRead:"el libro no se encuentra en el catálogo";
};

//5. Slot Machine

class SlothMachine {
    constructor(){
        this.counter = 0;
        this.sloth = [false,false,false];
    }

    play(){
        this.sloth = (this.sloth.map(book => {return book = Boolean(Math.round(Math.random()))}))
        this.counter++;        
        if(this.sloth.every(booleanValue => booleanValue)){
            console.log(`Congratulations!!!. You won ${this.counter} coins!!`)
            this.counter = 0;
        }else{
            console.log( "Good luck next time!!")
        }             
    }
}