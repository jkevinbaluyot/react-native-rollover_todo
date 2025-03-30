import { useState, useEffect, useContext } from 'react';
import { List } from '@/models';
import { DatabaseContext } from '@/providers/DbProvider';
import { useIsFocused } from '@react-navigation/native';
import { deleteListById, getRecentLists } from '@/actions/list.actions';
import { deleteListItem, deleteListItemsByListId } from '@/actions/list_item.actions';

const useRecentTodoHook = () => {
    const [recentTodos, setRecentTodos] = useState<List[]>([]);
    const {db_connection} = useContext(DatabaseContext);
    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused && db_connection !== null){
          getRecentLists(db_connection)
          .then(result => setRecentTodos(result as List[]))  
        }
    
        return () => {
        }
      }, [isFocused]
    )

    const handleDelete = (id: number) => {
        if(db_connection){
            deleteListById(db_connection, id)
                .then(() => {
                    deleteListItemsByListId(db_connection, id);
                    getRecentLists(db_connection)
                        .then(result => setRecentTodos(result as List[]));  
                });
        }
    }

    return { recentTodos, setRecentTodos, handleDelete };
};

export default useRecentTodoHook;