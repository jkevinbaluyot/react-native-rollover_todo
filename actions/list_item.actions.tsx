import * as SQLite from 'expo-sqlite';
import { ListItem } from '@/models';

const table_name = 'list_items';

// create a new table if doesnt exist
export const createTable = async (db: Promise<SQLite.SQLiteDatabase>) => {
    return (await db).execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS ${table_name} 
        (id INTEGER PRIMARY KEY NOT NULL, value TEXT, done BOOLEAN, list_id INTEGER);
    `);
};

const getListItems = async (db: SQLite.SQLiteDatabase, list_id: number) => {
    return await db.getFirstAsync(`SELECT * FROM ${table_name} WHERE LIST_ID = ${list_id}`);
};

export const createListItem = async (db: SQLite.SQLiteDatabase, list_item: ListItem) => {
    const values = { 
        $value: list_item.value, 
        $done: list_item.done, 
        $list_id: list_item.list_id 
    }; 

    return await db.runAsync(`INSERT INTO test (value, done, list_id) VALUES ($value, $done, $list_id);`, values);
};

export const updateListItem = async (db: SQLite.SQLiteDatabase, list_item: ListItem) => {
    const values = { 
        $value: list_item.value, 
        $done: list_item.done, 
        $id: list_item.id 
    }; 

    return await db.runAsync(`UPDATE SET ${table_name} value = $value, done = $done WHERE id = $id`, values);
};

export const deleteListItem = async (db: SQLite.SQLiteDatabase, id: number) => {
    return await db.runAsync(`DELETE FROM ${table_name} WHERE value = $id`, { $id: id });
};