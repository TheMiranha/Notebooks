import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/home/Home'
import './App.css';

export default function App() {


  const API = {
    getNotebooks: async(callBack) => {
      window.electron.ipcRenderer.once('getNotebooks', notebooks => {
        callBack(notebooks);
      })
      window.electron.ipcRenderer.getNotebooks();
    },
    saveNote: async(note) => {
      window.electron.ipcRenderer.once('saveNote', () => {});
      window.electron.ipcRenderer.saveNote(note);
    },
    createNotebook: async(nome, callBack) => {
      window.electron.ipcRenderer.once('createNotebook', () => {
        console.log('Aqui!');
      });
      window.electron.ipcRenderer.createNotebook(nome);
    },
    createNote: async(note) => {
      window.electron.ipcRenderer.once('createNote', () => {});
      window.electron.ipcRenderer.createNote(note);
    },
    deleteNotebook: async(id) => {
      window.electron.ipcRenderer.once('deleteNotebook', () => {});
      window.electron.ipcRenderer.deleteNotebook(id);
    },
    deleteNote: async(id) => {
      window.electron.ipcRenderer.once('deleteNote', () => {});
      window.electron.ipcRenderer.deleteNote(id);
    },
  }

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home api={API}/>} />
        </Routes>
      </Router>
  );
}
