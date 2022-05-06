import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SelectNotebook = (props) => {

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Selecione um notebook
          </Typography>
          <List>
          {props.notebooks.map((notebook) => {
            return (
              <ListItem style={{height: '50px'}}onClick={() => {
                props.handleClose();
                props.handleSelectNotebook(notebook);
              }} button key={notebook.id}
              >
                <ListItemIcon>
                  <Chip label={notebook.notes.length} />
                </ListItemIcon>
                <ListItemText primary={notebook.name} />
              </ListItem>
            )
          })}
        </List>
        </Box>
      </Modal>
    </div>
  );
}

export default SelectNotebook;