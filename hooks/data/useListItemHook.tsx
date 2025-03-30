import { useContext, useEffect, useState } from 'react';
import { ListItem } from '@/models/ListItem';
import { DatabaseContext } from '@/providers/DbProvider';
import { useIsFocused } from '@react-navigation/native';
import { List } from '@/models';
import { getOrCreateList } from '@/actions/list.actions';
import { createListItem, deleteListItem, getListItems, updateListItem } from '@/actions/list_item.actions';
import { useLocalSearchParams } from 'expo-router';

const useListItemHook = () => {
    const { id } = useLocalSearchParams();
    const { db_connection } = useContext(DatabaseContext);
    const isFocused = useIsFocused();
    const [listItems, setListItems] = useState<ListItem[]>([]);
    const [list, setList] = useState<List | undefined>();

    useEffect(() => {
        if(isFocused && db_connection !== null){
            const dateObj = new Date(id as string);
            const isoStr = dateObj.toISOString();

            getOrCreateList(db_connection, isoStr)
                .then(result => {
                    if(result){
                        setList(result)
                        getListItems(db_connection, result.id).then(result => {
                            setListItems(result as ListItem[])
                        })
                    }
                })
        }

        return () => {
            
        }
    }, [isFocused])

    const addItem = async (value: string, list_id: number) => {
        const item = {
            id: undefined,
            list_id: list_id,
            value: value,
            done: false,
        }

        if (db_connection) {
            return createListItem(db_connection, item)
                    .then((result) => {
                        const newItem: ListItem = {
                        id: result.lastInsertRowId,
                        list_id: item.list_id,
                        value: item.value,
                        done: item.done,
                        };
                        setListItems((prevItems) => [...prevItems, newItem]);
                        return newItem;
                    });
        } else {
            console.error("Database connection is null.");
            return Promise.reject("Database connection is null.");
        }

    };

    const toggleItemCompletion = (item: ListItem) => {
        if(item?.id && db_connection){
            const updatedItem = { ...item, done: !item.done };
            updateListItem(db_connection, updatedItem)
            .then((result) => {

                setListItems((prevItems) =>
                    prevItems.map((i) =>
                        i.id === updatedItem.id ? { ...item, done: updatedItem.done } : item
                    )
                );
            });
        }

    };

    const updateItem = (item: ListItem) => {
        if(item?.id && db_connection){
            const updatedItem = { ...item, value: item.value };
            updateListItem(db_connection, updatedItem)
            .then((result) => {
                setListItems((prevItems) => [...prevItems.filter((i) => i.id !== item.id), updatedItem]);
            });
        }
    };

    const removeItem = (id: number) => {
        if(db_connection){
            deleteListItem(db_connection, id)
                .then((result) => {
                    setListItems((prevItems) => prevItems.filter((item) => item.id !== id));
                })
        }
        
    };

    return {
        list,
        setList,
        listItems,
        setListItems,
        addItem,
        updateItem,
        toggleItemCompletion,
        removeItem,
    };
};

export default useListItemHook;