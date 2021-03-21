import React, { Component } from 'react';


// styles
import '../styles/components/FormsTopSection.css';


class FormsTopSection extends Component {
    state = {
        inputText: '',
        showData: {
            name: '',
            text: '',
        }
    }

    handleInputChange = ({target: {value}}) => {
        this.setState({
            inputText: value,
        })
    }


    handleShow = (event) => {
        event.preventDefault();


        const {inputText} = this.state;
        this.setState({
            inputText: '',
            showData: {
                name: inputText,
            }
        })
    }

    render() {
        const {inputText, showData} = this.state;
        const {name} = showData;

        return (
            <>
                <form className="forms">
                    <div className="form-city">
                        <input
                            className="input-form-city"
                            type="text"
                            value={inputText}
                            onChange={this.handleInputChange}
                            placeholder="New York"
                        />
                        <label className="label-form-city">
                            Your destination or hotel name
                        </label>
                    </div>
                    <div className="form-check">
                        <div className="form-check-in">
                            <input
                                className="input-check-in"
                                type="text"
                                placeholder="Tue 15 Sept"
                            />
                            <label className="label-check-in">
                                Check-in
                            </label>
                        </div>
                        <div className="form-check-out">
                            <input
                                className="input-check-out"
                                type="text"
                                placeholder="Sat 19 Sept"
                            />
                            <label className="label-check-out">
                                Check-out
                            </label>
                        </div>
                    </div>
                    <div className="form-room">
                        <input
                            className="input-room"
                            type="text"
                            placeholder="2 Adults — 0 Children — 1 Room"
                        />
                    </div>
                    <button className="form-button" type="submit" onClick={this.handleShow}>Search</button>
                </form>
            </>
        )
    }
}

 export default FormsTopSection;