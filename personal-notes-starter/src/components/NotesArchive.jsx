import React from "react";
import NotesItem from "./NotesItem";

const NotesArchivedList = ({archivedNotes, onDelete, onMove, onArchive }) => {
    return ( 
        <div className="notes-list">
            {
                archivedNotes.map((arrNotes) => (
                    <NotesItem
                    key={arrNotes.id}
                    id={arrNotes.id}
                    createdAt={arrNotes.createdAt}
                    archived={arrNotes.archived}
                    onDelete={onDelete}
                    onMove={onMove}
                    onArchive={onArchive}
                    {...arrNotes} />
                ))
            }
        </div>
    )
}

export default NotesArchivedList;