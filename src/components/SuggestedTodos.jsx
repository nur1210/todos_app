import {useGlobalState} from "../context/useGlobalState.jsx";
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";

function SuggestedTodos() {
    const {todos, deletedTodos} = useGlobalState();
    const [suggestedTodos, setSuggestedTodos] = useState([]);

    useEffect(() => {
        const newSuggestedTodos = deletedTodos.filter((todo) => todo.count > 2 && todo.complete)
            .sort((a, b) => b.count - a.count)
            .slice(0, 3);
        setSuggestedTodos(newSuggestedTodos);
    }, [deletedTodos]);

    const handleAddTodo = (todo) => {
        const newTodos = [...todos, {id: todo.id, name: todo.name, complete: false, count: todo.count}];
        const newDeletedTodos = deletedTodos.filter((deletedTodo) => deletedTodo.id !== todo.id);
        GlobalState.set({todos: newTodos, deletedTodos: newDeletedTodos});
    };

    return (
        <Box>
            {suggestedTodos.length === 0 ? (
                <Box></Box>
            ) : (
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    m={2}
                >
                    <Typography variant="h5" mb={1}>
                        Suggestions
                    </Typography>
                    <Typography variant="span">Based on your usage</Typography>
                    <Box>
                        {suggestedTodos.map((todo) => (
                            <Box key={todo.id} display="flex" justifyContent="space-between" alignItems="center" p={2}
                                 mb={2} boxShadow={1}>
                                <Typography variant="body1" mr={2}>{todo.name}</Typography>
                                <Button variant="contained" color="primary" onClick={() => handleAddTodo(todo)}>
                                    Add
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default SuggestedTodos;