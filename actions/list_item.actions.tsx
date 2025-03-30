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

export const getListItems = async (db: Promise<SQLite.SQLiteDatabase>, list_id: number) => {
    return (await db).getAllAsync(`SELECT * FROM ${table_name} WHERE list_id = ${list_id}`);
};

export const createListItem = async (db: Promise<SQLite.SQLiteDatabase>, list_item: ListItem) => {
    const values = { 
        $value: list_item.value, 
        $done: false, 
        $list_id: list_item.list_id 
    }; 

    return (await db).runAsync(`INSERT INTO ${table_name} (value, done, list_id) VALUES ($value, $done, $list_id);`, values);
};

export const updateListItem = async (db: Promise<SQLite.SQLiteDatabase>, list_item: ListItem) => {
    if (list_item.id === undefined) {
        throw new Error("list_item.id is undefined");
    }

    const values = { 
        $value: list_item.value, 
        $done: list_item.done, 
        $id: list_item.id 
    }; 

    return (await db).runAsync(`UPDATE ${table_name} SET value = $value, done = $done WHERE id = $id`, values);
};

export const deleteListItem = async (db: Promise<SQLite.SQLiteDatabase>, id: number) => {
    return (await db).runAsync(`DELETE FROM ${table_name} WHERE value = $id`, { $id: id });
};

export const deleteListItemsByListId = async (db: Promise<SQLite.SQLiteDatabase>, list_id: number) => {
    return (await db).runAsync(`DELETE FROM ${table_name} WHERE list_id = $list_id`, { $list_id: list_id });
};