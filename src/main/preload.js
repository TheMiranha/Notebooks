const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing(msg) {
      ipcRenderer.send('ipc-example', msg);
    },
    createNotebook(nome) {
      ipcRenderer.send('createNotebook', nome);
    },
    getNotebooks() {
      ipcRenderer.send('getNotebooks')
    },
    saveNote(note){
      ipcRenderer.send('saveNote', note);
    },
    createNote(note){
      ipcRenderer.send('createNote', note);
    },
    deleteNotebook(id) {
      ipcRenderer.send('deleteNotebook', id);
    },
    deleteNote(id) {
      ipcRenderer.send('deleteNote', id);
    },
    on(channel, func) {
      const validChannels = ['ipc-example', 'getNotebooks', 'saveNote'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example', 'getNotebooks'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
});
