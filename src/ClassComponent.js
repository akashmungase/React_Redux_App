import React, { Component } from "react";

export default class ClassComponent extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h4>CLass Component</h4>
                <h4>{this.props.userDetails}</h4>
            </div>
        )
    }
}