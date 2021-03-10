import React from "react";
import PropTypes from 'prop-types';

//styles
import '../styles/components/Hotels.css';


const Hotel = ({ hotel }) => (
    <div className="home col-3">
        <img className="homes-img" src={hotel.imageUrl} alt={hotel.name}/>
        <a className="homes-link">{hotel.name}</a>
        <p className="homes-text">{hotel.city}, {hotel.country}</p>
    </div>
);

Hotel.prototype = {
    hotel: PropTypes.object.isRequired
};

export default Hotel;