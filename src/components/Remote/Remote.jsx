import React from 'react';
import DelNote from "../DelNote/DelNote";

const Remote = ({remotedNotes, restore, empty}) => {
    return (
        <div>
            <h4 className="title">Корзина</h4>
            {remotedNotes.length ? <button onClick={empty} className="btn">Очистить</button> : null}
            <div>
                {
                    remotedNotes.map(note => {
                        return (
                            <DelNote key={note.id} id={note.id} body={note.body} title={note.title} restore={restore}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Remote;