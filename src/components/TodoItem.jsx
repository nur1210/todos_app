import { useState } from "react";
import {Card, CardActions, Checkbox, Input, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";

export default function ToDoItem({todo,id,checkComplete,handleEditTodos}) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };

  return (
    <Box sx={{ padding: "5px", marginRight: "5px" }}>
      <Box>
        {onEdit ? (
          <CardActions>
            <Input
              type="text"
              id="editValue"
              value={editValue}
              name="editValue"
              onChange={(e) => setEditValue(e.target.value)}
            />
            <Button onClick={() => handleSave(id)} size="small">
              Save
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            <Checkbox
              id={id.toString()}
              checked={todo.complete}
              onChange={() => checkComplete(id)}
            />
            <Typography
              variant="body1"
              component="span"
              sx={{ textDecoration: todo.complete ? "line-through" : "" }}
            >
              {todo.name}
            </Typography>
            <Button
              onClick={handleOnEdit}
              size="small"
              startIcon={<EditIcon />}
              sx={{ marginLeft: "auto" }}
            >
              Edit
            </Button>
          </CardActions>
        )}
      </Box>
    </Box>
  );
}
