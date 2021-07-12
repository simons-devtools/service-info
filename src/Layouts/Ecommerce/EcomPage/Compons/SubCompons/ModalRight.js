import React from 'react';
import './ModalRight.modules.css';
import features1 from '../../../../../Assets/Ecom-images/app-features-1.png';
import features2 from '../../../../../Assets/Ecom-images/app-features-2.png';
import features3 from '../../../../../Assets/Ecom-images/app-features-3.png';

const ModalRight = () => {
    return (
        <div className="features-body">
            <div className="features-one">
                <h3>Application for keys featutes</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, inventore!</p>
                <img src={features1} alt="" style={{ width: '100%', heigth: '200px' }} />
            </div>

            <div className="features-two">
                <h3>Application for business featutes</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, recusandae.</p>
                <img src={features2} alt="" style={{ width: '100%', heigth: '200px' }} />
            </div>

            <div className="features-three">
                <h3>Application for others featutes</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, ea.</p>
                <img src={features3} alt="" style={{ width: '100%', heigth: '200px' }} />
            </div>
        </div>
    );
};

export default ModalRight;