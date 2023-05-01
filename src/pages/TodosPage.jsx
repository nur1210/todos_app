import {Box, Stack} from "@mui/material";
import TodosList from "../components/TodosList.jsx";
import AddTodo from "../components/AddTodo.jsx";
import Footer from "../components/DeleteTodos.jsx";
import SuggestedTodos from "../components/SuggestedTodos.jsx";

function TodosPage() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <SuggestedTodos/>
            <TodosList/>
            <AddTodo/>
            <Footer/>
        </Box>
    );
}

export default TodosPage;