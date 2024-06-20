import { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap";

function DeleteAPI() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getUser();
    }, [])

    function getUser() {
        fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
            result.json().then((response) => {
                setData(response)
            })
        })
    }

    function deleteUser(id) {

        // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        //     method: 'DELETE'
        // }).then((result) =>
        //     result.json().then((response) => {
        //         console.log("response", response);
        //         if (condition) {

        //         }
        //     }))

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    console.log(`Successfully deleted post with id: ${id}`);
                    getUser();
                    return response.json();
                } else {
                    console.error(`Failed to delete post with id: ${id}. Status: ${response.status}`);
                }
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <h4>Get API Call</h4>
            <h4>Delete API Call</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.userId}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td>
                                    <Button variant="danger"
                                        onClick={() => deleteUser(item.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )}
                </tbody>
            </Table>
        </div>
    )
}

export default DeleteAPI;