import {useGlobalState, GlobalState} from "../context/useGlobalState.jsx";
import {useState} from "react";
import Button from "@mui/material/Button";
import {Switch, Typography} from "@mui/material";
import Box from "@mui/material/Box";

export default function DeleteTodos() {
    const [checkAll, setCheckAll] = useState(false);
    const {todos, deletedTodos} = useGlobalState();

    const setTodos = (newTodos) => {
        GlobalState.set({todos: newTodos});
    };

    const setDeletedTodos = (newDeletedTodos) => {
        GlobalState.set({deletedTodos: [...deletedTodos, ...newDeletedTodos]});
    }

    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach((todo) => {
            todo.complete = !checkAll;
        });
        setTodos(newTodos);
        setCheckAll(!checkAll);
    };

    const newTodosComplete = () => {
        return todos.filter((todo) => todo.complete === false);
    };

    const handleDelete = () => {
        const removedTodos = todos.filter((todo) => todo.complete === true);
        removedTodos.forEach((todo) => {
            todo.count += 1
        });
        setDeletedTodos(removedTodos);
        setTodos(newTodosComplete());
    }

    const deleteTodo = () => {
        handleDelete();
        setCheckAll(false);
    };

    return (
        <Box mt={2}>
            {todos.length === 0 ? (
                <Typography varient="h2">Congratulations! Nothings To Do</Typography>
            ) : (
                <Box display="flex"
                     flexDirection="column"
                     justifyContent="space-between"
                     alignItems="center">
                    <label htmlFor="all">
                        <Switch
                            name="all"
                            id="all"
                            onChange={handleCheckAll}
                            checked={checkAll}
                        />
                        SELECT ALL
                    </label>
                    <p>You have {newTodosComplete().length} remaining</p>
                    <Button
                        size=""
                        variant="outlined"
                        color="error"
                        id="delete"
                        onClick={deleteTodo}
                    >
                        Delete
                    </Button>
                </Box>
            )}
        </Box>
    );
}