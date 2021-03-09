'use strict';

const sqlite = require('sqlite3');

const db = new sqlite.Database('numbers.sqlite', (err) => {
    if(err) throw(err);
});

// db.all()

db.all('SELECT * FROM numbers',(err, rows) => {
    if(err)
        throw(err);
    else{
        for(let row of rows){
            console.log(row.number);
        }
    }
});

console.log('Done');
db.close();
