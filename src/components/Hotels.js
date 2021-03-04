import React from "react";

//styles
import '../styles/components/Hotels.css';


const Hotel = ({ children }) => (
    <div className="home col-3">
        <img className="homes-img" src={children.imageUrl} alt={children.name}/>
        <a className="homes-link">{children.name}</a>
        <p className="homes-text">{children.city}, {children.country}</p>
    </div>);

export default Hotel;