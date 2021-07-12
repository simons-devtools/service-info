import React from 'react';
import './EcomPage.modules.css';
import { useState } from 'react';
import { Container } from '@material-ui/core';
import OnePageApp from './Compons/OnePageApp';
import MultiplePageApp from './Compons/MultiplePageApp';
import EcommerceWebApp from './Compons/EcommerceWebApp';
import EcomModal from './Compons/EcomModal';
import BuyAppModal from './Compons/BuyAppModal';

const EcomPage = ({ applications }) => {
    const [modalApp, setModalApp] = useState([]);

    // Handle featutes modal button:
    const handleFeatureBtn = (addedApp) => {
        // console.log(addedApp);
        const myModal = document.getElementById('myModal');
        myModal.style.display = 'block';
        setModalApp(addedApp);
    }

    // Handle Buy modal button:
    const handleBuyBtn = (addedApp) => {
        handleModalClose();
        // console.log(addedApp);
        const myModalTwo = document.getElementById('myModalTwo');
        myModalTwo.style.display = 'block';
    }

    // Handle modal close button:
    function handleModalClose() {
        const modal = document.getElementById('myModal');
        modal.style.display = "none";
        
        const modalTwo = document.getElementById('myModalTwo');
        modalTwo.style.display = "none";
    }
    // console.log(modalApp);

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
                    <BuyAppModal
                        modalApp={modalApp}
                        handleBuyBtn={handleBuyBtn}
                    />
                </div>
            </div>
            {/* end modal */}

            <div className="ecom-page-wrapper">
                <OnePageApp
                    applications={applications}
                    handleFeatureBtn={handleFeatureBtn}
                />
                <MultiplePageApp
                    applications={applications}
                    handleFeatureBtn={handleFeatureBtn}
                />
                <EcommerceWebApp
                    applications={applications}
                    handleFeatureBtn={handleFeatureBtn}
                />
            </div>
        </Container>
    );
};

export default EcomPage;