import React from 'react';
//constants
import {hotels} from "../constants/content";
//styles
import '../styles/components/HomesGuestsLoves.css';
import Hotel from "./Hotels.js";

const HomesGuestsLoves = () => (
    <div className="homes">
        <div className="container">
            <h2 className= "h2-text">Homes guests loves</h2>
            <div className="row">
                <>
                    {hotels.map(item => (
                        <Hotel key={item.id}>{item}</Hotel>
                    ))}
                </>
            </div>
        </div>
    </div>)

export default HomesGuestsLoves;