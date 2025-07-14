import { Link } from "react-router-dom"
const Navbar = () => {

    return (
        <div id = 'navbar'>
            <div id = 'navbar-logo-title'>
            <img id = 'logo' src = '/thereallogo.png' />
            <h1 id = 'navbar-neuro-title'>Neuro</h1><h1 id = 'navbar-file-title'>File</h1>
            </div>
            <div id = 'navbar-links'>
            <Link to = '/'>Home</Link>
            <Link to = '/installation'>Installation</Link>
            <Link to = '/playground'>Playground</Link>
            <Link to = '/support'>Support</Link>
            <Link to = '/about'>About Us</Link>
            <Link to = '/contactus'>Contact Us</Link>
            </div>
        </div>
    )
}

export default Navbar