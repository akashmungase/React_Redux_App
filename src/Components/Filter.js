import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

function Filter() {

    const [searchParams, setSearchParam] = useSearchParams();

    console.log('searchParams', searchParams.get("age"));
    console.log('searchParams', searchParams.get("city"));

    const age = searchParams.get("age");
    const city = searchParams.get("city");

    return (
        <div>
            <h3>Filter Page</h3>
            <h4>Age is: {age}</h4>
            <h4>City is: {city}</h4>
            <Button onClick={()=>setSearchParam({age: 24, city: 'Pune'})}>
                Set Quary Params
            </Button>
        </div>
    )
}

export default Filter;