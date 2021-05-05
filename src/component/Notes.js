import React from 'react';

const Notes=({notes,setNotes})=>{
    return(
        <div>
{notes.map((note)=>(
    <div key={note.id}>
    <h3>{note.name}</h3>
    <p>{note.note1}</p>
    </div>
))}
        </div>
    )
}
export default Notes;