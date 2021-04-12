import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWish } from '../../actions';
import { v1 as uuid } from 'uuid';
import './WishesInput.css';

const WishesInput = () => {
    let [name, setName] = useState('');
    let dispatch = useDispatch();

    return (
        <>
            <div className="wrapper-input">
                <div className="input-form">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                    />
                    <button
                        onClick={() => {
                            dispatch(
                                addWish({
                                    id: uuid(),
                                    name: name,
                                })
                            );
                            setName('');
                        }}
                        type="submit"
                    >
                        Add wish
                    </button>
                </div>
            </div>
        </>
    );
};

export default WishesInput;
