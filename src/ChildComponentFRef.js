import { forwardRef } from "react";

function ChildComponentFRef(props,ref) {
    return (
        <div>
            <h4>forwordRef used in Child Component</h4>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default forwardRef(ChildComponentFRef);