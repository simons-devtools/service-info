import React from 'react';

const Notification = ({ message }) => {
    // Props response: 
    // const [message, setMessage] = useState({
    //     isSuccess: false,
    //     text: ''
    // });

    // When condition is true:
    // function setData(params) {
    //     setMessage({
    //         isSuccess: res,
    //         text: 'Your are successfully done',
    //     });
    // }

    // Handle Notification Message:
    message.isSuccess && setTimeout(() => {
        const alertMessage = document.getElementById("alertMessage");
        alertMessage.style.display = "none";
    }, 5000);

    return (
        <p
            id="alertMessage"
            className="message-alert"
            style={{
                position: 'fixed',
                bottom: '5%',
                width: '235px',
                color: '#fff',
                fontSize: '16px',
                backgroundColor: '#43a047',
                padding: '5px 10px',
                boxShadow: '0 1px 4px 0 #999',
            }}
        >{message.text}</p>
    );
};

export default Notification;