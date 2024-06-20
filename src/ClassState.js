import { Component } from "react";

class ClassState extends Component {

    constructor() {
        super();
        this.state = {
            data: 0
        }
    }

    updateData() {
        this.setState({ data: this.state.data + 1 })
    }
    render() {
        return (
            <div>
                <h4>ClassState Component</h4>
                <h4>{this.state.data}</h4>
                <button onClick={()=> this.updateData()}>Update Data</button>
            </div>
        )
    }
}

export default ClassState;