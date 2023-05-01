import ToDoItem from "./TodoItem.jsx";
import {useGlobalState} from "../context/useGlobalState.jsx";
import Box from "@mui/material/Box";
import {Card} from "@mui/material";

export default function TodosList() {
    const {todos} = useGlobalState();

    const setTodos = (newTodos) => {
        GlobalState.set({todos: newTodos});
    };
    const switchComplete = (id) => {
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.complete = !todo.complete;
            }
        });
        setTodos(newTodos);
    };

    const handleEditTodos = (editvalue, id) => {
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.name = editvalue;
            }
        });
        setTodos(newTodos);
    };

    return (
        <Card>
                {todos.map((todo, index) => (
                    <ToDoItem
                        todo={todo}
                        key={index}
                        id={index}
                        checkComplete={switchComplete}
                        handleEditTodos={handleEditTodos}
                    />
                ))}
        </Card>
    );
}
