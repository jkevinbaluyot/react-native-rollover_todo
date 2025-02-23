import { createContext } from "react";
import { Slot } from 'expo-router';
import { useDbConnection } from "@/hooks/useDbConnection";
import * as SQLite from 'expo-sqlite';

export interface IDatabase {
    db_connection: Promise<SQLite.SQLiteDatabase>;
}

const db_connection = useDbConnection();

const values = {db_connection}

export const DatabaseContext = createContext<IDatabase>(values)

export function DbProvider({ children } :any){

    return (
        <DatabaseContext.Provider value={values}>
            {children}
        </DatabaseContext.Provider>
    );
}