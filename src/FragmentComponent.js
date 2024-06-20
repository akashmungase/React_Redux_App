import { Fragment } from "react";

function FragmentComponent(Props) {
    return (

        // First way
        <Fragment>
            {
                Props.student.map((item, i) =>
                    <h4 key={i}>{item}</h4>
                )
            }
        </Fragment>

        //  Second way
        // <>
        //     {
        //         Props.student.map((item, i) =>
        //             <h4 key={i}>{item}</h4>
        //         )
        //     }
        // </>
    )
}

export default FragmentComponent;