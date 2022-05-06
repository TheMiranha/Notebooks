import * as React from 'react';
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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 260;

const Sidemenu = (props) =>  {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem onClick={() => {
            props.abrirEscolhaDeNotebook();
          }} button key={'notebooks'} secondaryAction={
              <Chip label={props.notebooks.length} />
            }>
            <ListItemIcon>
              <MenuBookIcon color={'secondary'}/>
            </ListItemIcon>
            <ListItemText primary={'Notebooks'} />
          </ListItem>
          <ListItem onClick={() => {
            props.abrirCriacaoDeNotebook();
          }} button key={'criar_notebook'}>
            <ListItemIcon>
              <AddIcon color={'primary'}/>
            </ListItemIcon>
            <ListItemText primary={'Criar notebook'} />
          </ListItem>
        </List>
        <Divider/>
          {props.notebook ? 
          <List>
            <ListItem button key={props.notebook.id + '_notebook'}>
              <ListItemText primary={'Notebook: ' + props.notebook.name}/>
            </ListItem>
          </List>: false}
        {props.notebook ? <List>
        <ListItem onClick={props.deletarNotebook} button>
            <ListItemIcon>
              <DeleteIcon color={'error'}/>
            </ListItemIcon>
            <ListItemText primary={'Deletar Notebook'}/>
          </ListItem>
          <ListItem onClick={props.abrirCriacaoDeNote} button>
            <ListItemIcon>
              <AddIcon color={'primary'}/>
            </ListItemIcon>
            <ListItemText primary={'Criar note'}/>
          </ListItem>
        </List> : false}
        <Divider/>
        <List>
          {props.notebook ? props.notebook.notes.map(note => {
            return (
              <ListItem onClick={() => {
                props.handleSelectNote(note);
              }} button key={note.id}>
                <ListItemIcon>
                  <CircleIcon color={note.color}/>
                </ListItemIcon>
                <ListItemText primary={<Chip label={note.name} variant="outlined" />} />
              </ListItem>
            )
          }) : false}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
      {props.children}
      </Box>
    </Box>
  );
}

export default Sidemenu;