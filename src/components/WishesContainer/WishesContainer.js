import React from 'react';
import Wish from '../Wish/Wish';
import { useSelector } from 'react-redux';
import './WishesContainer.css';
import WishesInput from '../WishesInput/WishesInput';
import SendMailForm from '../SendMailForm/SendMailForm';

function WishesContainer() {
    let wishes = useSelector((state) => state);
    console.log(wishes);

    return (
        <div className="wrapper-container">
            <WishesInput />
            {wishes.map((wish) => {
                console.log(wishes);
                return <Wish key={wish.id} wish={wish} />;
            })}
            <SendMailForm />
        </div>
    );
}

export default WishesContainer;
