import { Component, PureComponent } from "react";
import { Button } from "react-bootstrap";
import ChildPureComponent from "./ChildPureComponent";

export default class PureComponentExample extends PureComponent {

    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        console.log('check redendring');
        return (
            <div>
                <h4>Pure Component</h4>
                <h4>Count: {this.state.count}</h4>
                <ChildPureComponent data={this.state.count} />
                <Button onClick={() => this.setState({ count: this.state.count })}>Update Count</Button>
                {/* <Button onClick={()=>this.setState({ count: this.state.count + 1 })}>
                Update Count</Button> */}
            </div>
        )
    }
}