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
import IconButton from '@material-ui/core/IconButton';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Stack } from '@mui/material';

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

const CreateNotebook = (props) => {

  const [name, setName] = React.useState('');

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography>
              Digite o nome para seu Notebook
            </Typography>
          <Stack direction="row" sx={{mt: 2}}>
            <TextField value={name} onChange={(event) => {setName(event.target.value)}}required label="Notebook"/>
            <IconButton onClick={() => {props.createNotebook(name); setName('')}}>
              <AddIcon color="primary"/>
            </IconButton>
          </Stack>
          </Grid>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Digite o nome para seu Notebook
          </Typography>
          <TextField
          required
          id="outlined-required"
          label="Obrigatório"
        /> */}
        </Box>
      </Modal>
    </div>
  );
}

export default CreateNotebook;