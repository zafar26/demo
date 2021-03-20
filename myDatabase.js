import Dexie from 'dexie';

const db = new Dexie('myDb');
db.version(1).stores({
    orders: `++id, productName, quantity,description, deliveryDate`,
    // login: '++id, usertype, email, password'
});

export default db