"use strict"

const cooks = new Map();
cooks.set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты");


cooks.forEach((value, key) => {
    console.log(key, ' - специализация:', value);
});

console.log('\n');


const dishes = new Map();
dishes.set("Пицца 'Маргарита'", "Виктор")
    .set("Пицца 'Пепперони'", "Виктор")
    .set("Суши 'Филадельфия'", "Ольга")
    .set("Суши 'Калифорния'", "Ольга")
    .set("Тирамису", "Дмитрий")
    .set("Чизкейк", "Дмитрий");

console.log(`Пиццу 'Маргарита' приготовил повар: ${dishes.get("Пицца 'Маргарита'")}`);
console.log(`Суши 'Калифорния' приготовил повар: ${dishes.get("Суши 'Калифорния'")}`);
console.log(`Чизкейк приготовил повар: ${dishes.get("Чизкейк")}`);
console.log('\n');


const clients = [
    {
        name: 'Алексей'
    },
    {
        name: 'Мария'
    },
    {
        name: 'Ирина'
    }

];

const clientOrders = [];

clientOrders[0] = new Set();
clientOrders[0].add("Пицца 'Пепперони'")
    .add("Тирамису");

clientOrders[1] = new Set();
clientOrders[1].add("Суши 'Калифорния'")
    .add("Пицца 'Маргарита'");

clientOrders[2] = new Set();
clientOrders[2].add("Чизкейк");

const orders = new Map();

for (let index = 0; index < clients.length; index++) {
    orders.set(clients[index], clientOrders[index]);
}

for (let i = 0; i < clients.length; i++) {
    console.log(`Клиент ${clients[i].name} заказал(а): ${[...orders.get(clients[i])]}`);
}
