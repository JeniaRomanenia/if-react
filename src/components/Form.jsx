import React from 'react';


// styles
import '../styles/components/Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleData = this.handleData.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value,});
    }

    handleData(event) {
        event.preventDefault();
    }


    render() {
        return (
            <>
                <form className="forms">
                    <div className="form-city">
                        <input
                            className="input-form-city"
                            type="text"
                            value={this.state.value}
                            onChange= {this.handleChange}
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
                    <button
                        className="form-button"
                        type="submit"
                        onClick={this.handleData}
                    >
                        Search
                    </button>
                </form>
            </>
        )
    }
}

 export default Form;