import { Table } from "react-bootstrap";

function NestedListArray() {

    const CustomerDetails = [
        {
            name: "Akash", email: "akash@test.com", contact: "123456789", address: [
                { Hn: "MSR1348", city: "Solapur", country: "India" },
                { Hn: "HSD8942", city: "Pandhapur", country: "India" },
                { Hn: "HGS4519", city: "Sangola", country: "India" }
            ]
        },
        {
            name: "Jaydeep", email: "jaydeep@test.com", contact: "435981184", address: [
                { Hn: "SDE5245", city: "Kolapur", country: "India" },
                { Hn: "KJA8654", city: "Panala", country: "India" },
                { Hn: "VAS3519", city: "Goa", country: "India" }
            ]
        },
        {
            name: "Krish", email: "krish@test.com", contact: "678121412", address: [
                { Hn: "GFA5484", city: "Satara", country: "India" },
                { Hn: "DGF4891", city: "Sangli", country: "India" },
                { Hn: "KHG2034", city: "Karad", country: "India" }
            ]
        },
    ]

    return (
        <div>
            <h4>Nested List Array</h4>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>

                    {CustomerDetails.map((item, i) =>
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>
                                <Table striped bordered hover variant="dark">
                                    <tbody>
                                        {
                                            item.address.map((data, index) =>
                                                <tr key={index}>
                                                    <td>{data.Hn}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.country}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    )}

                </tbody>
            </Table>
        </div>
    )
}

export default NestedListArray;