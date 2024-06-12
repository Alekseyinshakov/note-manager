import React from 'react';
import s from "./Note.module.css"

const Note = ({title, body, id, deleteNote, changeNote}) => {
    return (
        <div className={s.wrap}>
            <h5>{title}</h5>
            <div className={s.p}>{
                body.split('\n').map((p, i) => {
                    if (p === '') return <br key={i}/>
                    return <div key={i}>{p}</div>
                })

            }</div>

            <button onClick={() => {
                changeNote(id)
            }} className="btn">Изменить</button>
            <button onClick={() => {
                deleteNote(id)
            }} className="btn">Удалить
            </button>
        </div>
    );
};

export default Note;