import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import { useGlobalState } from "../context/useGlobalState.jsx";
import Box from "@mui/material/Box";
import {Input} from "@mui/material";

export default function AddTodo() {
  const { todos } = useGlobalState();
 const setTodos = (newTodos) => {
    GlobalState.set({ todos: newTodos });
  };
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
    todoInput.current.focus();
  };


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo(e);
    }
  };

  return (
    <Box
        display="flex"
        justifyContent="center"
        mt={3}
    >
      <Input
        type="text"
        name="todos"
        id="todos"
        ref={todoInput}
        required
        placeholder="What needs to be done?"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{ flexGrow: 1, marginRight: "10px", padding: "10px", color: "blue"}}
      />
      <Button variant="contained" color="primary" onClick={addTodo}>
        <AddIcon />
      </Button>
    </Box>
  );
}
