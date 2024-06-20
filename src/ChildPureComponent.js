import { Component, PureComponent } from "react";

export default class ChildPureComponent extends PureComponent {

    render() {
        console.log('Check Child PureComponent  redendring');

        return (
            <div>
                <h4>Child Pure Component</h4>
                <h4>{this.props.data}</h4>
            </div>
        )
    }
}