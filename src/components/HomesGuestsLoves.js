import React from 'react';

//styles
import '../styles/components/HomesGuestsLoves.css';
import Hotel from "./Hotels.js";

const HomesGuestsLoves = (props) => (
    <div className="homes">
        <div className="container">
            <h2 className= "h2-text">Homes guests loves</h2>
            <div className="row">
                    {props.hotels.map(hotel => (
                        <Hotel key={hotel.id} hotel={hotel}/>
                    ))}
            </div>
        </div>
    </div>)

export default HomesGuestsLoves;