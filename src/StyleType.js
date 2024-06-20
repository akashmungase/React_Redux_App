import './Style.css'
import style from './custom.module.css'

function StyleType() {
    return (
        <div>
            <h4>StyleType Component</h4>

            {/* inline style */}
            <h4 style={{ backgroundColor: "yellow", color: "rgb(11, 11, 88)" }}>Style Type 1 in React.js</h4>

            {/* importing style.css file */}
            <h4 className="bg-white text-dark ">Style Type 2 in React.js</h4>

            {/* by using modular css*/}
            <h4 className={style.success}>Style Type 3 in React.js</h4>
        </div>
    )
}

export default StyleType;