import React from 'react';
import NotesAppHeader from './NotesAppHeader';
import NotesAppList from './NotesAppList';
import NotesAppInput from './NotesAppInput';
import NotesArchivedList from './NotesArchive';
import { getInitialData, showFormattedDate } from '../utils';

class NotesApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(), 
            archivedNotes: []

        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onMoveHandler = this.onMoveHandler.bind(this);
        
    }

    onDeleteHandler(id) {
        const updatedNotes = this.state.notes.filter((note) => note.id !== id);
        const updatedArchivedNotes = this.state.archivedNotes.filter((note) => note.id !== id);
        this.setState({ notes: updatedNotes, archivedNotes: updatedArchivedNotes });
    }
    
    onArchiveHandler(id) {
        this.setState((prevState) => {
          return prevState.notes.map((note) => note.id === id ? (note.archived = !note.archived) : note);
        })
      }

    onMoveHandler(id) {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map((note) => {
                if (note.id === id) {
                    return {
                        ...note,
                        archived: true,
                    };
                }
                return note;
            });
    
            const movedNote = prevState.notes.find((note) => note.id === id);
    
            return {
                notes: updatedNotes,
                archiveNotes: [...prevState.archiveNotes, movedNote],
            };
        });
    }

    onAddNotesHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title: title,
                        body: body,
                        createdAt: +new Date(),
                        archived: false,
                    }
                ]
            }
        })
    }

    render() {
        return (
            <>
            <NotesAppHeader />
            <div className='note-app__body'>
            <div className='note-input'>
            <h2>Buat catatan</h2>
            <NotesAppInput addNotes={this.onAddNotesHandler} />
            </div>
            <h2>Catatan Aktif</h2>
            <NotesAppList notes={this.state.notes.filter(note => note.archived === false)}onDelete={this.onDeleteHandler} onMove={this.onMoveHandler}/>
            <h2>Arsip</h2>
            <NotesArchivedList archivedNotes={this.state.archivedNotes.filter(note => note.archived === true)} onDelete={this.onDeleteHandler} onMove={this.onMoveHandler} />
            </div>
            </>
        )
    }
}

export default NotesApp;