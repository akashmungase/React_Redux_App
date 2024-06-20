import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

function PostAPI() {

    const [userId, setUserId] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    let data = { userId, title, body }

    function saveUser() {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(json => console.log("Response json", json))
            .catch(error => console.error('Error:', error));
    }
    
    return (
        <div>
            <Row>
                <Col></Col>
                <Col className="shadow-sm py-4 rounded bg-white">
                    <h4>Post API Call</h4>
                    <br /><br />
                    <div className="py-2">
                        <div className="p-2">
                            <input type="text" value={userId} className="form-control" placeholder="UserId"
                                onChange={(e) => { setUserId(e.target.value) }} />
                        </div>
                        <div className="p-2">
                            <input type="text" value={title} className="form-control" placeholder="Title"
                                onChange={(e) => { setTitle(e.target.value) }} />
                        </div>
                        <div className="p-2">
                            <input type="text" value={body} className="form-control" placeholder="Body"
                                onChange={(e) => { setBody(e.target.value) }} />
                        </div>
                        <Button className="mt-2" onClick={saveUser}>Add User</Button>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default PostAPI;