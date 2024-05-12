import React from 'react';
import NotesItemBody from './NotesItemBody';
import NotesItemAction from './NotesItemAction';

const NotesItem = ({id, title, createdAt, body, onDelete, onArchive, onMove, archived}) => {
    return (
        <div className='note-item'>
            <NotesItemBody  title={title} body={body} createdAt={createdAt}/>
            <NotesItemAction id={id} onDelete={onDelete}  onArchive={onArchive} onMove={onMove} isArchived={archived}/>
        </div>
    )
}

export default NotesItem;