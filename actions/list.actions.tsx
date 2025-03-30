import * as SQLite from 'expo-sqlite';
import { List } from '@/models';

const table_name = 'lists';

// create a new table if doesnt exist
export const createTable = async (db: Promise<SQLite.SQLiteDatabase>) => {
    return (await db).execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS ${table_name} 
        (id INTEGER PRIMARY KEY NOT NULL, date_string TEXT);
    `);
};

export const getAllLists = async (db: SQLite.SQLiteDatabase, year: number) => {
    return await db.getAllAsync(`SELECT * FROM ${table_name}`);
}

export const getRecentLists = async (db: Promise<SQLite.SQLiteDatabase>) => {
    return (await db).getAllAsync(`SELECT * FROM ${table_name} ORDER BY id DESC LIMIT 10`);
}

export const getListsByDateRange = async (
    db: Promise<SQLite.SQLiteDatabase>,
    startDate: string,
    endDate: string
) => {
    return (await db).getAllAsync(
        `SELECT * FROM ${table_name} WHERE date_string BETWEEN $startDate AND $endDate`,
        { $startDate: startDate, $endDate: endDate }
    );
};

// Create list using date if it doesn't exist
export const getOrCreateList = async (db: Promise<SQLite.SQLiteDatabase>, date_string: string ) => {
    const result = (await db).runAsync(`INSERT INTO ${table_name} (date_string)
                                    SELECT $date_string
                                    WHERE NOT EXISTS (SELECT 1 FROM ${table_name} WHERE date_string = $date_string) `,
                                    {$date_string: date_string});

    return (await db).getFirstAsync< List >(`SELECT * FROM ${table_name} where date_string = $date_string`, { $date_string: date_string });
}