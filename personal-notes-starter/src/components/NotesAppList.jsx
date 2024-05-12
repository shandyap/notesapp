import React from 'react';
import NotesItem from './NotesItem';

const NotesAppList = ({notes, onDelete, onArchive}) => {

    return(
        <div className='notes-list'>
            {
                notes.map((note) => (
                    <NotesItem 
                        key={note.id}
                        id={note.id}
                        createdAt={note.createdAt}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note} />
                ))
            }
        </div>
    )
}

export default NotesAppList