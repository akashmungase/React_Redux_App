import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import NavBar from "./Components/NavBar";
import Page404 from "./Components/Page404";
import User from "./Components/User";
import Filter from "./Components/Filter";
import NavigateToURL from "./Components/NavigateToURL";
import Contact from "./Components/Contact";
import Channel from "./Components/Channel";
import Compay from "./Components/Company";
import Company from "./Components/Company";
import Other from "./Components/Other";
import UseLocation from "./Components/UseLocation";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";

function Routing() {
    return (
        <div>
            {/* <h4>React Routing</h4> */}
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/" element={<ProtectedRoute Component={Home} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/*" element={<Page404 />} /> */}
                    <Route path="/*" element={<Navigate to={'/'} />} />

                    {/* route with param */}
                    <Route path="/user/:name" element={<User />} />
                    <Route path="/filter" element={<Filter />} />
                    <Route path="/navigation" element={<NavigateToURL />} />

                    <Route path="/contact/" element={<Contact />} >

                        <Route path="channel" element={<Channel />} />
                        <Route path="company" element={<Company />} />
                        <Route path="others" element={<Other />} />

                    </Route>
                    <Route path="/useLocation" element={<UseLocation />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;