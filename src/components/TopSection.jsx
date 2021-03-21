import React from 'react';

// components
import Navigation from "./Navigation";
import FormsTopSection from "./FormsTopSection";
import Icon from "./Icon";

// styles
import '../styles/components/TopSection.css';



const TopSection = () => (
    <div className="top-section" >
        <div className="container" >
            <Navigation />
            <FormsTopSection />
            <Icon />
        </div>
    </div>
);

export default TopSection;