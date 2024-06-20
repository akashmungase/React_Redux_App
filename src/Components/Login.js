import { Button, Col, Row } from "react-bootstrap";

function Login() {
    return (
        <div>
            <Row>
                <Col></Col>
                <Col className="shadow-sm py-4 rounded bg-white">
            <h4>Login Page</h4>
            <br /><br />
            <div className="py-2">
                <div className="p-2">
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="p-2">
                    <input type="text" className="form-control" placeholder="Password" />
                </div>
                <Button className="mt-2">Login</Button>
            </div>
            </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default Login;