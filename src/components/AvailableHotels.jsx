import React from 'react';
import PropTypes from 'prop-types';

// styles
import '../styles/components/HomesGuestsLoves.css';

// constants
import { hotels } from '../constants/content';
import Hotel from "./Hotels";

const AvailableHotels = () => (
    <div className='homes'>
        <div className='container'>
            <h2 className='h2-text'>
                Available hotels
            </h2>
            <div className='row'>
                {hotels.map((hotel) => (
                    <Hotel
                        key={hotel.id}
                        hotel={hotel}
                    />
                ))}
            </div>
        </div>
    </div>
)

export default AvailableHotels;