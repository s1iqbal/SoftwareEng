import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
        <div className="Home">
            <div className="lander">
            <h1>D2L Reimagined</h1>
            <p>Student interaction for Universities</p>
            <p className="App-intro"><b>API Status:</b> {this.state.apiResponse}</p>
            </div>

        </div>
        );
  }
}
