import logo from './logo.svg';
import './Reset.css';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Remote from "./components/Remote/Remote";
import {useEffect, useState} from "react";
import ModalForm from "./components/ModalForm/ModalForm";



function App() {

    let storedNotes = [];
    if (localStorage.getItem('storedNotes')) {
        storedNotes = JSON.parse(localStorage.getItem('storedNotes'));
    }

    let deletedNotes = [];
    if (localStorage.getItem('deletedNotes')) {
        deletedNotes = JSON.parse(localStorage.getItem('deletedNotes'));
    }



    const [notes, setNotes] = useState(storedNotes)
    const [remotedNotes, setRemotedNotes] = useState(deletedNotes)
    const [isModalForm, setIsModalForm] = useState(false)


    function formActive() {
        setIsModalForm(true)
    }

    function addNote(newNote, id) {
        if(id){

            const editedNotes = notes.map(note => {
                if(id === note.id) {
                    return {...newNote, id}
                } else {
                    return note
                }
            })

            setNotes(editedNotes);
            setIsModalForm(false);
            setPrevData({title: '', body: ''})
            return;
        }
        setNotes([{...newNote, id: new Date().getTime()}, ...notes])

        setIsModalForm(false)
    }

    function deleteNote(id) {
        notes.forEach(note => {
            if (note.id === id) {
                setRemotedNotes([note, ...remotedNotes]);
                localStorage.setItem('deletedNotes', JSON.stringify(remotedNotes));
            }
        })
        setNotes(notes.filter(note => {
            return note.id != id
        }))
    }

    const [prevData, setPrevData ] = useState({title: '', body: ''});
    function changeNote(id, title, body) {
        setPrevData({id, title, body})
        setIsModalForm(true)
    }

    useEffect(() => {
        localStorage.setItem('storedNotes', JSON.stringify(notes));
        localStorage.setItem('deletedNotes', JSON.stringify(remotedNotes));
    }, [notes, remotedNotes])


    return (
        <div className="App">
            <header className="header">
                <h1>Простой менеджер заметок</h1>
            </header>
            <nav className="navbar">
                <div className="container">
                    <ul className="nav_list">
                        <li>
                            <Link className="btn" to="main">Главная</Link>
                        </li>
                        <li>
                            <Link className="btn" to="remote">Корзина</Link>
                        </li>
                        <li>
                            <button onClick={() => {formActive()}} className="btn">Создать заметку</button>
                        </li>

                    </ul>
                </div>
            </nav>
            <main className="content">
                <div className="container">
                    <Routes>
                        <Route path="/main" element={<Main notes={notes} deleteNote={deleteNote} changeNote={changeNote}/>}/>
                        <Route path="/remote" element={<Remote remotedNotes={remotedNotes} />}/>
                        <Route path="/" element={<Main notes={notes} deleteNote={deleteNote} changeNote={changeNote}/>}/>
                    </Routes>
                </div>
            </main>
            <footer>
                Это веб-приложение создано с использованием библиотеки React в качестве учебной практики
            </footer>

            {isModalForm && <ModalForm prevData={prevData} setPrevData={setPrevData} setIsModalForm={setIsModalForm} addNote={addNote}/>}

        </div>
    );
}

export default App;
