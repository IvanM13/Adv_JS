class Acount {
    #balance = 0;

    constructor(balance) {
        if (typeof balance !== "number" || balance < 0) {
            throw new Error("Сумма не должна быть меньше нуля!");
        }
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || amount < 0) {
            throw new Error("Сумма не должна быть меньше нуля!");
        }
        return this.#balance += amount;
    }
    withdraw(amount) {
        if (typeof amount !== "number" || amount > this.#balance) {
            throw new Error("Сумма не должна быть меньше нуля!");
        }
        return this.#balance -= amount;
    }
}

const acc = new Acount(900);
console.log(acc.balance);
acc.deposit(1500);
console.log(acc.balance);
acc.withdraw(400);
console.log(acc.balance);

acc.deposit(200000);
console.log(acc.balance);
// acc.withdraw(400000);
// console.log(acc.balance);
acc.deposit(0);
console.log(acc.balance);
acc.withdraw(2000);
console.log(acc.balance);