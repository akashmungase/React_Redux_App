import { Component } from "react";

export default class ChildComponent extends Component {

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render() {
        return (
            <div>
                <h4>Child Component</h4>
            </div>
        )
    }
}