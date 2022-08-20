import { Outlet, NavLink } from "react-router-dom"


const Home = () => {

    const navStyle=({isActive}) => {
        return isActive ? {textTransform:"uppercase", fontSize:"27px"} : undefined
    }

    return <div>
        <Outlet />
        <nav>
            <ul>
                <li><NavLink reloadDocument style={navStyle} to="/">Home</NavLink></li>
                <li><NavLink style={navStyle} to="/about">About</NavLink></li>
                <li><NavLink style={navStyle} to="/contacts">Contacts</NavLink></li>
            </ul>
        </nav>
    </div>
}

export default Home