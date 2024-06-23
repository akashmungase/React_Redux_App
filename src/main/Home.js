import { Button } from "react-bootstrap";

function Home(props) {
    return (
        <div>
            <h4>Home Component</h4>
            <div className="card-wrapper">
                <div className="imgae-wrapper item">
                    <img
                        src="https://cdsassets.apple.com/live/7WUAS350/images/ios-apps/iphoto/ios15-iphone13-pro-home-camera-callout.png"
                        alt="img" />
                </div>
                <div className="text-wrapper item">
                    <h4>IPhone    </h4>
                    <div>
                        <b>Price $ 500</b>
                    </div>
                </div>
                <div className="btn-wrapper item">
                    <Button variant="warning"
                        onClick={() => props.addToCardHanddler(
                            { id: 1, name: 'iphone', price: 500 }
                        )}
                    >
                        Add To Cart
                    </Button>
                    <Button variant="danger" className="mt-2"
                        onClick={() => props.removeToCardHanddler(
                            { id: 1, name: 'iphone', price: 500 }
                        )}
                    >
                        Remove From Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home;