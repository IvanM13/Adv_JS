const { error } = require("console");
const { resolve } = require("path");

let generateRandomNumber = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if(randomNumber){
                resolve(randomNumber);
            } else {
                reject('Error random num');
            }
        }, 1000);
    });
};

generateRandomNumber()
    .then((number) => {
        console.log('generate random num:', number);
    })
    .catch((error) => {
        console.log('Error:', error);
    });
let checkIfFile = (file) =>{

};



let checkFile = (file) =>{
    return new Promise((resolve, reject)  =>{
        setTimeout(()=>{
            const fileExist = checkIfFile(file);
            if (fileExist) {
                console.log('file is exist');
            } else {
                console.log('file dont exist');
            }
        }, 1000);
    });
};


checkFile('/test.txt')
    .then((message) =>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    });


let calcSum = (a, b) =>{
    return new Promise((resolve, reject) =>{
        const sum = a + b;
        resolve(sum);
    });
};

calcSum(4, 5)
    .then((result) =>{
        console.log('result:', result);
    })
