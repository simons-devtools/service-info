import React from 'react';
import './EcomPage.modules.css';
import { useState } from 'react';
import { Container } from '@material-ui/core';
import OnePageApp from './Compons/OnePageApp';
import MultiplePageApp from './Compons/MultiplePageApp';
import EcommerceWebApp from './Compons/EcommerceWebApp';
import EcomModal from './Compons/EcomModal';
import OrderCrossing from '../OrderCrossing/OrderCrossing';

const EcomPage = ({ applications }) => {
    const [modalApp, setModalApp] = useState([]);
    const [modalTwoApp, setModalTwoApp] = useState({});
    const [paymentMethod, setPaymentMethod] = useState(null);

    // Handle featutes modal button:
    const handleFeatureBtn = (addedApp) => {
        const myModal = document.getElementById('myModal');
        myModal.style.display = 'block';
        setModalApp(addedApp);
    }

    // Handle Buy modal button:
    const handleBuyBtn = (addedApp) => {
        handleModalClose();
        const myModalTwo = document.getElementById('myModalTwo');
        myModalTwo.style.display = 'block';
        setModalTwoApp(addedApp);
    }

    // Handle modal close button:
    function handleModalClose(addedProps) {
        const modal = document.getElementById('myModal');
        modal.style.display = "none";

        const modalTwo = document.getElementById('myModalTwo');
        modalTwo.style.display = "none";
        setPaymentMethod(addedProps)
    }

    return (
        <Container>
            <div id="myModal" className="modal">
                <strong onClick={handleModalClose} className="close">X</strong>
                <div className="modal-body">
                    <EcomModal
                        modalApp={modalApp}
                        handleBuyBtn={handleBuyBtn}
                    />
                </div>
            </div>
            <div id="myModalTwo" className="modal-two">
                <strong onClick={handleModalClose} className="close">X</strong>
                <div className="modal-body-two">
                    <OrderCrossing
                        modalTwoApp={modalTwoApp}
                        handleModalClose={handleModalClose}
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                    />
                </div>
            </div>
            {/* end modal */}

            <div className="ecom-page-wrapper">
                <OnePageApp
                    applications={applications}
                    handleFeatureBtn={handleFeatureBtn}
                    handleBuyBtn={handleBuyBtn}
                />
                <MultiplePageApp
                    applications={applications}
                    handleFeatureBtn={handleFeatureBtn}
                    handleBuyBtn={handleBuyBtn}
                />
                <EcommerceWebApp
                    applications={applications}
                    handleFeatureBtn={handleFeatureBtn}
                    handleBuyBtn={handleBuyBtn}
                />
            </div>
        </Container>
    );
};

export default EcomPage;