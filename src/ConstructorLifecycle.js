import { Component } from "react";

export default class ConstructorLifecycle extends Component {
    constructor() {
        super();
        this.state = {
            data: "lorem wksj"
        }
    }

    render() {
        return (
            <div>
                <h4>Constructor Lifecycle Component</h4>

            </div>
        )
    }
}