import Dexie from 'dexie';

const db = new Dexie('myDb');
db.version(1).stores({
    // friends: `++id, name, age`,
    login: '++id, usertype, email, password'
});

export default db