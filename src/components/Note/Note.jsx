import React from 'react';
import s from "./Note.module.css"

const Note = ({title, body, id, deleteNote, changeNote}) => {

    const date = new Date(id)

    return (
        <div className={s.wrap}>
            <div className={s.date}>{date.toDateString()}<span>{date.toLocaleTimeString()}</span></div>
            <div className={s.date}></div>

            <h5>{title}</h5>
            <div className={s.p}>{
                body.split('\n').map((p, i) => {
                    if (p === '') return <br key={i}/>
                    return <div key={i}>{p}</div>
                })

            }</div>

            <button onClick={() => {
                changeNote(id, title, body)
            }} className="btn">Изменить</button>
            <button onClick={() => {
                deleteNote(id)
            }} className="btn">Удалить
            </button>
        </div>
    );
};

export default Note;