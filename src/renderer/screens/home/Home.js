import Sidebar from './components/Sidebar'
import SelectNotebook from './components/SelectNotebook'
import CreateNotebook from './components/CreateNotebook'
import CreateNote from './components/CreateNote'
import Markdown from './components/Markdown'
import { useState, useEffect } from 'react';

const Home = (props) => {

    const [notebooks, setNotebooks] = useState([]);
    const [notebook, setNotebook] = useState(notebooks[0]);
    const [escolhendoNotebook, setEscolhendoNotebook] = useState(false);
    const [criandoNotebook, setCriandoNotebook] = useState(false);
    const [criandoNote, setCriandoNote] = useState(false);
    const [note, setNote] = useState(null)
    const [load, setLoad] = useState(true);

    useEffect(() => {
        props.api.getNotebooks(notebooks => {
            setNotebooks(notebooks);
            handleSelectNotebook(notebooks[0]);
        })
      }, []);
    
    const handleSelectNotebook = (notebook) => {
        setNotebook(notebook);
        setNote(null)
        setEscolhendoNotebook(false);
    }

    const handleSelectNote = (x) => {
        setNote(x);
    }

    const deleteNotebook = (id) => {
        if (notebook)
        {
            if (notebook.id === id)
            {
                setNotebook(null);
            }
        }
        props.api.deleteNotebook(id).then(x => {
            setNotebooks(x);
        });
    }

    const changeContent = (content) => {
        setNote({...note, content: content});
    }

    const saveNote = (note) => {
        props.api.saveNote(note);
        var notebook_id = note.notebook_id;
        var notebook = notebooks.filter(x => x.id == notebook_id)[0];
        var index = notebook.notes.findIndex(x => x.id == note.id);
        notebook.notes[index] = note;
        var index = notebooks.findIndex(x => x.id == notebook_id);
        notebooks[index] = notebook;
    }

    const createNotebook = (name) => {
        if (name.trim().length > 0)
        {
            props.api.createNotebook(name, () => {});
            setCriandoNotebook(false);
                props.api.getNotebooks(notebooks => {
                    setNotebooks(notebooks);
                    handleSelectNotebook(notebooks[notebooks.length-1]);
                })
        }
    }

    const criarNote = (nome, color) => {
        var nota = {name: nome,color, content: '', notebook_id: notebook.id};
        props.api.createNote(nota, () => {});
        setCriandoNote(false);
        setTimeout(() => {
            props.api.getNotebooks(notebooks => {
                setNotebooks(notebooks);
                var notebookIndex = notebooks.findIndex(x => x.id == notebook.id);
                setNotebook(notebooks[notebookIndex]);
            })
        }, 2*100)
    }

    const deletarNotebook = () => {
        setNotebook(null)
        setNote(null)
        props.api.deleteNotebook(notebook.id);
        props.api.getNotebooks(notebooks => {
            setNotebooks(notebooks);
        })
    }

    const deleteNote = () => {
        var notebook_id = note.notebook_id;
        var id = note.id;
        console.log('awdjaw')
        props.api.deleteNote(id);
        setTimeout(() => {
            props.api.getNotebooks(notebooks => {
                setNotebooks(notebooks);
                var notebookIndex = notebooks.findIndex(x => x.id == notebook.id);
                setNotebook(notebooks[notebookIndex]);
            })
        }, 2*100)
        setNote(null);
    }

    return (
        <Sidebar deletarNotebook={deletarNotebook} abrirCriacaoDeNote={() => {setCriandoNote(true)}} abrirCriacaoDeNotebook={() => {setCriandoNotebook(true)}} handleSelectNote={handleSelectNote} abrirEscolhaDeNotebook={() => {setEscolhendoNotebook(true)}} notebooks={notebooks} notebook={notebook}>
            <SelectNotebook deleteNotebook={deleteNotebook} open={escolhendoNotebook} notebooks={notebooks} handleSelectNotebook={handleSelectNotebook} handleClose={() => {setEscolhendoNotebook(false)}}/>
            <CreateNotebook createNotebook={createNotebook} open={criandoNotebook} handleClose={() => {setCriandoNotebook(false)}}/>
            <CreateNote open={criandoNote} criarNote={criarNote} handleClose={() => {setCriandoNote(false)}}/>
            {
                note ? <Markdown deleteNote={deleteNote} saveNote={saveNote} changeContent={changeContent} note={note} notebook={notebook}/> : false
            }
        </Sidebar>
    )
}

export default Home;