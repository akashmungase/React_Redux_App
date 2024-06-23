function Header(props) {
    console.log("props", props);
    return (
        <div className="mt-3">
            {/* <h4>Header Component</h4> */}
            <span className='badge badge-warning' id='lblCartCount'> {props?.data?.length} </span>
            <div className="add-to-cart">
                <img src="https://cdn5.vectorstock.com/i/1000x1000/42/69/add-to-cart-vector-19134269.jpg" alt="" />
            </div>
        </div>
    )
}

export default Header;