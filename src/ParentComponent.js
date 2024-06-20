import { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>
                <h4>Parent Component</h4>
                {
                    this.state.show ? <ChildComponent /> : <h4>Child Component Removed</h4>
                }
                <button onClick={() => this.setState({show: !this.state.show})}>
                    Show Hide Child Component
                </button>
            </div>
        )
    }
}