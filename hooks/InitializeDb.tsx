import { useEffect } from "react";
import { createTable as createListTable } from "@/actions/list.actions";
import { createTable as createListItemTable } from "@/actions/list_item.actions";
import React from "react";
import { useContext } from "react";
import { DatabaseContext } from "@/providers/DbProvider";

export function InitializeDb() {
    const { db_connection } = useContext(DatabaseContext)

    useEffect(() => {   
        if(db_connection){
          createListTable(db_connection);
          createListItemTable(db_connection);
        }

      return () => {
        
      }
    }, [db_connection])

    return <></>
}
