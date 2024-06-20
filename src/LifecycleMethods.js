import { Component } from "react";

export default class LifecycleMethods extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        console.log("constructor");
    }

    // componentDidMount() {
    //     console.log("componentDidMount");
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("componentDidUpdate",prevState.count , this.state.count);
    //     if (this.state.count < 5) {
    //         this.setState({count: this.state.count + 1})
    //     }
    //     // if (prevState.count === this.state.count) {
    //     //     alert("data already same")
    //     // }
    // }


    // shouldComponentUpdate() {
    //     console.log("shouldComponentUpdate");
    //     if (this.state.count > 1 && this.state.count < 3) {
    //         return true
    //     }
    //     // return true
    // }

    render() {
        console.log("render");
        return (
            <div>
                <h4>LifecycleMethods</h4>
                <h4>{this.state.count}</h4>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Count</button>
            </div>
        );
    }
}
