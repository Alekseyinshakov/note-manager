import React from 'react';
import DelNote from "../DelNote/DelNote";

const Remote = ({remotedNotes}) => {
    return (
        <div>
            <h4 className="title">Корзина</h4>
            <div>
                {
                    remotedNotes.map(note => {
                        return (
                            <DelNote key={note.id} id={note.id} body={note.body} title={note.title}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Remote;