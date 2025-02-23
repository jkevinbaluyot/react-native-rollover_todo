import * as SQLite from 'expo-sqlite';
import { DatabaseConstants } from '@/constants/DatabaseConstants';

// establish and open database
export const useDbConnection = async () => {
    const db = await SQLite.openDatabaseAsync(DatabaseConstants.db_name);
    return db;
};
