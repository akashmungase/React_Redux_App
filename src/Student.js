import { Table } from "react-bootstrap";
import FragmentComponent from "./FragmentComponent";

function Student() {

    const Student = ["Akash", "Jaydeep", "Krish"]

    return (
        <div>
            <h4>Student</h4>
            <FragmentComponent student={Student}/>
        </div>
    )
}

export default Student;