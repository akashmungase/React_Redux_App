import { Table } from "react-bootstrap";

function ArrayListingAndMap() {

    const Student = ["Akash", "Jaydeep", "Krish"]

    const StudentDetails = [
        { name: "Akash", email: "akash@test.com", contact: "123456789" },
        { name: "Jaydeep", email: "jaydeep@test.com", contact: "435981184" },
        { name: "Krish", email: "krish@test.com", contact: "678121412" },
    ]

    // Student.map((item) => {
    //     console.log("In Map Method student name: ", item);
    // })

    // for (let i = 0; i < Student.length; i++) {
    //     console.log("In for loop student name: ", Student[i]);
    // }
    return (
        <div>
            <h4>Array Listing and Map</h4>

            {
                Student.map((item, i) =>
                    <h4 key={i}>{item}</h4>
                )
            }

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {StudentDetails.map((data, i) =>
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default ArrayListingAndMap;