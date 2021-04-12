import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWish, updateWish } from '../../actions';
import './Wish.css';

function Wish({ wish }) {
    let dispatch = useDispatch();
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(wish.name);

    return (
        <div>
            <div className="wrapper-item">
                <div>
                    {editable ? (
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                    ) : (
                        <h4>{wish.name} </h4>
                    )}
                </div>
                <div className="functional-buttons">
                    <button
                        onClick={() => {
                            dispatch(
                                updateWish({
                                    ...wish,
                                    name: name,
                                })
                            );
                            if (editable) {
                                setName(wish.name);
                            }
                            setEditable(!editable);
                        }}
                        className="edit-button"
                    >
                        {editable ? 'update' : 'edit'}
                    </button>
                    <button
                        onClick={() => dispatch(deleteWish(wish.id))}
                        className="delete-button"
                    >
                        delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Wish;
