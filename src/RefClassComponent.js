import { Component, createRef } from "react";

class RefClassComponent extends Component {

    constructor() {
        super();
        this.inputRef = createRef();
    }
    componentDidMount() {
        // console.log(this.inputRef.current.value = 100);
    }
    getValue() {
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color="red"
    }
    render() {
        return (
            <div>
                <h4>Ref in Class Component</h4>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.getValue()}>Check Ref</button>
            </div>
        )
    }
}

export default RefClassComponent;