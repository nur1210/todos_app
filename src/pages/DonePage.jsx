import {useGlobalState} from "../context/useGlobalState.jsx";
import Button from "@mui/material/Button";
import {Typography, Box} from "@mui/material";

function DonePage() {
    const {todos, deletedTodos} = useGlobalState();

    const handleRestoreTodo = (todo) => {
        const newTodos = [...todos, {id: todo.id, name: todo.name, complete: false}];
        const newDeletedTodos = deletedTodos.filter((deletedTodo) => deletedTodo.id !== todo.id);
        GlobalState.set({todos: newTodos, deletedTodos: newDeletedTodos});
    };

    return (
        <Box m={2}>
            <Typography variant="h4" mb={2}>
                Completed Todos
            </Typography>
            {deletedTodos.length === 0 ? (
                <Typography variant="h6">Nothing to restore.</Typography>
            ) : (
                <Box>
                    <Typography variant="h6">
                        You have {deletedTodos.length} completed task{deletedTodos.length !== 1 ? "s" : ""}.
                    </Typography>
                    <Box mt={2}>
                        {deletedTodos.map((todo) => (
                            <Box key={todo.id} display="flex" justifyContent="space-between" alignItems="center" p={2}
                                 mb={2} boxShadow={1}>
                                <Typography variant="body1">{todo.name}</Typography>
                                <Button variant="contained" color="primary" onClick={() => handleRestoreTodo(todo)}>
                                    Restore
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default DonePage;