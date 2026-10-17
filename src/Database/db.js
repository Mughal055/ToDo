import {open} from '@op-engineering/op-sqlite'

export const Db = open({name : 'todo.db'})

Db.execute(`
    CREATE TABLE IF NOT EXISTS notes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    status TEXT ,
    created_at INTEGER DEFAULT CURRENT_TIMESTAMP
    )`);