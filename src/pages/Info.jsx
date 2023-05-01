import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import {Link} from "react-router-dom";

function Info() {

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>
        Nur Nechuhstan Todo App
      </Typography>
      <Typography variant="subtitle1" mb={2}>
        This is a web app for managing your to-do list.
      </Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="h5" mb={1}>
          Features:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">
              - Add, edit, and delete tasks
            </Typography>
            <Typography variant="subtitle1">
              - Mark tasks as complete or incomplete
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">
              - View a list of all tasks or only completed tasks
            </Typography>
            <Typography variant="subtitle1">
              - Responsive design that works on all screen sizes
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
          <Link to={"/"}>
        <Button variant="contained" color="primary">
          Try it out!
        </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Info;
