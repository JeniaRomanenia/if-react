import React from 'react';
import PropTypes from 'prop-types';

//styles
import '../styles/components/HomesGuestsLoves.css';

//components
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
    </div>);

HomesGuestsLoves.propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HomesGuestsLoves;