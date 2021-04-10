import React from 'react';
import PropTypes from 'prop-types';

// styles
import '../styles/components/HomesGuestsLoves.css';

// constants
import { hotels } from '../constants/content';

// components
import Hotel from './Hotels.jsx';

const HomesGuestsLoves = () => (
  <div className="homes">
    <div className="container">
      <h2 className="h2-text">Homes guests loves</h2>
      <div className="row">
        {hotels.map((hotel) => (
          <Hotel
            key={hotel.id}
            hotel={hotel}
          />
        ))}
      </div>
    </div>
  </div>
);

HomesGuestsLoves.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomesGuestsLoves;
