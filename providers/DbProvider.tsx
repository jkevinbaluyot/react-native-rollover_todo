import { createContext } from "react";
import { Slot } from 'expo-router';
import { useDbConnection } from "@/hooks/useDbConnection";
import * as SQLite from 'expo-sqlite';
import { Platform } from "react-native";

export interface IDatabase {
    db_connection: Promise<SQLite.SQLiteDatabase>;
}

const db_connection = useDbConnection();

const values = Platform.OS === 'android' ? {db_connection} : {db_connection: null}

export const DatabaseContext = createContext<IDatabase | {db_connection: null}>(values)

export function DbProvider({ children } :any){

    return (
        <DatabaseContext.Provider value={values}>
            {children}
        </DatabaseContext.Provider>
    );
}