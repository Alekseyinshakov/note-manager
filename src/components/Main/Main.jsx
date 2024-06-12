import React from 'react';
import Note from "../Note/Note";


const Main = ({changeNote, deleteNote, notes }) => {
    return (
        <div>
            {
                notes.map(n => {
                    return <Note title={n.title} body={n.body} key={n.id} id={n.id} changeNote={changeNote} deleteNote={deleteNote}/>
                })
            }
        </div>
    );
};

export default Main;