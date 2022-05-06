import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
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
import TextField from '@mui/material/TextField';

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

const CreateNote = (props) => {

  const [color, setColor] = React.useState('success');
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Monte seu note
          </Typography>
          <TextField
          sx={{mt: 2}}
          required
          label="Note"
          value={name}
          onChange={(event) => {setName(event.target.value)}}
          />
            <Stack direction={'row'} alignItems={'center'}>
              <ColorSelector color={color} changeColor={setColor}/>
              <CircleIcon color={color} sx={{mt: 2, ml: 2}}/>
            </Stack>
            <Button onClick={() => {props.criarNote(name, color); setName(''); setColor('success')}} sx={{mt: 3}}>
              Criar note
            </Button>
        </Box>
      </Modal>
    </div>
  );
}

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

const ColorSelector = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    props.changeColor(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{minWidth: 120, mt: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">Cor</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.color}
          label="Cor"
          onChange={handleChange}
        >
          <MenuItem color={'success'} value={'success'}><Typography color={'success'}> Verde</Typography></MenuItem>
          <MenuItem color={'primary'} value={'primary'}>Azul</MenuItem>
          <MenuItem color={'error'} value={'error'}>Vermelho</MenuItem>
          <MenuItem color={'secondary'} value={'secondary'}>Roxo</MenuItem>
          <MenuItem color={'disabled'} value={'disabled'}>Cinza Claro</MenuItem>
          <MenuItem color={'action'} value={'action'}>Cinza Escuro</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default CreateNote;