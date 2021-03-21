import React from 'react';


// styles
import '../styles/components/FormsTopSection.css';


const FormsTopSection = () => (
    <div className="page">
    <h2 className="page-title">Discover stays
        <br />to live, work or just relax</h2>
    <form className="forms">
        <div className="form-city">
            <input  className="input-form-city" type="text" placeholder="New York" />
            <label className="label-form-city">
                Your destination or hotel name
            </label>
        </div>
        <div className="form-check">
            <div className="form-check-in">
                <input className="input-check-in" type="text" placeholder="Tue 15 Sept" />
                <label className="label-check-in">
                    Check-in
                </label>
            </div>
            <div className="form-check-out">
                <input  className="input-check-out" type="text" placeholder="Sat 19 Sept" />
                <label className="label-check-out">
                    Check-out
                </label>
            </div>
        </div>
        <div className="form-room">
            <input className="input-room" type="text" placeholder="2 Adults — 0 Children — 1 Room"/>
        </div>
        <button className="form-button" type="submit">Search</button>
    </form>
</div>);

 export default FormsTopSection;