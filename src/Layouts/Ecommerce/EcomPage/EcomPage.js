import React from 'react';
import './EcomPage.modules.css';
import { Container } from '@material-ui/core';
import OnePageApp from './Compons/OnePageApp';
import MultiplePageApp from './Compons/MultiplePageApp';
import EcommerceWebApp from './Compons/EcommerceWebApp';
import { useState } from 'react';
import EcomModal from './Compons/EcomModal';

const EcomPage = ({ applications }) => {
    const [modalApp, setModalApp] = useState([]);

    // Handle featutes button:
    const handleFeatureBtn = (addedApp) => {
        // console.log(addedApp);
        const myModal = document.getElementById('myModal');
        myModal.style.display = 'block';
        setModalApp(addedApp);
    }

    // Handle modal close button:
    function handleModalClose() {
        const modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
    // console.log(modalApp);

    return (
        <Container>
            <div id="myModal" className="modal">
                <strong onClick={handleModalClose} className="close">X</strong>
                <div className="modal-body">
                    <EcomModal modalApp={modalApp} />
                </div>
            </div>
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