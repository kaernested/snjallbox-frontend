import React from 'react';
import './App.css';
import './App.scss';


const Account = () => {
    return (
        <div className="contentContainer">
            <h1>Mínar síður</h1>
            <div className="accountContainer">
                <div className="accountTab">
                    <div className="allShipments">Stillingar</div>
                    <div className="activeShipments">Upplýsingar</div>
                </div>
            </div>
            <div>
                <div>Slökkva ljósin</div>
                <div>Litblinda</div>
                <div>Tilkynningar</div>
                <div>Aflæsa með FaceID</div>
                <div>Tölvupóstur og skilaboð</div>
                <div>Skilmálar</div>
            </div>
    </div>
    );
}

export default Account;
