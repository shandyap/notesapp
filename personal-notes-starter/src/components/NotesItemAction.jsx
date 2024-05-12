import React from 'react';

const NotesItemAction = ({ id, onDelete, onArchive, isArchived, onMove }) => {
    const handleDelete = () => {
        if (typeof onDelete === 'function') {
            onDelete(id);
        }
    };

    const handleArchive = () => {
        if (isArchived) {
            onMove(id);
        } else {
            onArchive(id);
        }
    };

    return (
        <div className='note-item__action'>
            <button className='note-item__delete-button' onClick={() => onDelete(id)}>Hapus</button>
            <button className='note-item__archive-button' onClick={() => onArchive(id)}>
                {isArchived ? 'Pindahkan' : 'Arsip'}
            </button>
        </div>
    );
};

export default NotesItemAction;