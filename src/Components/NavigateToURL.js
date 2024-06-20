import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavigateToURL() {

    const navigate = useNavigate();

    function navigatToAboutPage() {
        navigate('/about')
    }

    function navigatToFilterPage() {
        navigate('/filter')
    }

    return (
        <div>
            <h4>Navigate to URL By using on Button Click</h4>
            <Button onClick={() => navigatToAboutPage()}>Go To About</Button>
            &nbsp;
            <Button onClick={() => navigatToFilterPage()}>Go To Filter</Button>
        </div>
    )
}

export default NavigateToURL;