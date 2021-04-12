import React from 'react';
import emailjs from 'emailjs-com';
import './SendMailForm.css';

function SendMailForm() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_USER_API
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset('');
    }

    return (
        <div className="wrapper">
            <form onSubmit={sendEmail}>
                <h3>have any suggestions to improve ?</h3>

                <input type="text" placeholder="add your name" name="name" />
                <input type="email" placeholder="add your mail" name="email" />
                <input
                    type="text"
                    placeholder="add your message"
                    name="message"
                />

                <button type="submit">send message</button>
            </form>
        </div>
    );
}

export default SendMailForm;
