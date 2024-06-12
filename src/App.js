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

    const [notes, setNotes] = useState(storedNotes)
    const [isModalForm, setIsModalForm] = useState(false)


    function formActive() {
        setIsModalForm(true)
    }

    function addNote(newNote) {
        setNotes([...notes, {...newNote, id: new Date().getTime()}])

        setIsModalForm(false)
    }

    function deleteNote(id) {
        setNotes(notes.filter(note => {
            return note.id != id
        }))
    }
    function changeNote(id) {
        console.log('меняем пост' + id)

    }

    useEffect(() => {
        localStorage.setItem('storedNotes', JSON.stringify(notes));
    }, [notes])


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
                        <Route path="/remote" element={<Remote />}/>
                        <Route path="/" element={<Main notes={notes} deleteNote={deleteNote} changeNote={changeNote}/>}/>
                    </Routes>
                </div>
            </main>
            <footer>
                Это веб-приложение создано с использованием библиотеки React в качестве учебной практики
            </footer>

            {isModalForm && <ModalForm  setIsModalForm={setIsModalForm} addNote={addNote}/>}

        </div>
    );
}

export default App;
