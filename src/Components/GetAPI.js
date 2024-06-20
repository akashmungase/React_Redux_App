import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
function GetAPI() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((result) => {
            result.json().then((response) => {
                setData(response)
            })
        })
    },[])
    return (
        <div>
            <h4>Get API Call</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.body}</td>
                            </tr>
                        )}
                </tbody>
            </Table>
        </div>
    )
}

export default GetAPI;