import * as SQLite from 'expo-sqlite';
import { ListItem } from '@/models';

const table_name = 'lists';

// create a new table if doesnt exist
export const createTable = async (db: Promise<SQLite.SQLiteDatabase>) => {
    return (await db).execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS ${table_name} 
        (id INTEGER PRIMARY KEY NOT NULL, date_string TEXT);
    `);
};

const getAllLists = async (db: SQLite.SQLiteDatabase) => {
    return await db.getAllAsync(`SELECT * FROM ${table_name}`);
}

// Create list using date if it doesn't exist
const getList = async (db: SQLite.SQLiteDatabase, date_string: string ) => {
    const values = { $date_string: date_string };

    return await db.getFirstAsync(`INSERT OR REPLACE INTO ${table_name} (date_string) VALUES ($date_string)`, values);
}