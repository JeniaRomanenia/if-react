import React from 'react';

// components
import Navigation from "./Navigation";
import Heading from "./Heading";
import Icon from "./Icon";

// styles
import '../styles/components/TopSection.css';

const TopSection = () => (
    <div className="top-section" >
        <div className="container" >
            <Navigation />
            <Heading />
            <Icon />
        </div>
    </div>
);

export default TopSection;