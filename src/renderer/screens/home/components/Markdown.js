import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { Chip, IconButton, Stack } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

const Markdown = (props) => {
  return (
     <>
      <DenseAppBar deleteNote={props.deleteNote} name={props.note.name} color={props.note.color} salvar={() => {props.saveNote(props.note)}}/>
      <div className="container">
        <MDEditor
          value={props.note.content}
          onChange={props.changeContent}
          height={'90vh'}
        />
        <div style={{height: '2vh'}}/>
      </div>
     </>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const DenseAppBar = (props)  => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={props.color}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" sx={{mr: 5}}>
            {props.name}
          </Typography>
            <IconButton onClick={props.salvar} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <SaveIcon/>
            </IconButton>
            <IconButton onClick={() => {props.deleteNote()}} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <DeleteIcon/>
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Markdown;