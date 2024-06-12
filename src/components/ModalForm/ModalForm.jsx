import React, {useState} from 'react';
import s from './ModalForm.module.css'
import {Form} from "react-router-dom";

const ModalForm = ({setIsModalForm, addNote}) => {

    const [newNote, setNewNote] = useState({title: 't', body: 'b'})
    function closeModalForm(e) {
        if(e.target === e.currentTarget){
            setIsModalForm(false)
        }
    }
    function changeTitle(e) {
        setNewNote({...newNote, title: e.target.value})
    }
    function changeBody(e) {
        setNewNote({...newNote, body: e.target.value})
    }

    return (
        <div onMouseDown={closeModalForm} className={s.bg}>
            <form>
                <div>
                    <div on onClick={closeModalForm} className={s.close}></div>
                </div>
                <div><input value={newNote.title} onChange={changeTitle} placeholder="Заголовок" type="text"/></div>
                <div><textarea value={newNote.body} onChange={changeBody} placeholder="Содержание" rows="5"></textarea></div>

                <button onClick={() => {addNote(newNote)}} type='button' className='btn'>Добавить</button>
            </form>
        </div>
    );
};

export default ModalForm;