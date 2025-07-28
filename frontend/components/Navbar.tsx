import { Link } from "react-router-dom"
const Navbar = () => {

    return (
        <div id = 'navbar'>
            <div id = 'navbar-logo-title'>
            <img id = 'logo' src = '/thereallogo.png' />
            <div id = 'navbar-slogan'>
            <div id = 'navbar-title'>
            <h1 id = 'navbar-neuro-title'>Neuro</h1>
            <h1 id = 'navbar-file-title'>File</h1>
            </div>
            <div id = 'navbar-slogan-halves'>
            <p>Get to know your Codebase. </p> <p id = 'navbar-title-build'> Build smarter.</p>
            </div>
            </div>
            </div>
            <div id = 'navbar-links'>
                <div id = 'navbar-links-left'>
            <Link to = '/'>Home</Link>
            <Link to = '/installation'>Installation</Link>
            {/* <Link to = '/playground'>Playground</Link> */}
            <Link to = '/support'>Support</Link>
            </div>
            <div id = 'navbar-links-right'>
            <Link to = '/about'>About Us</Link>
            <Link to = '/contactus'>Contact Us</Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar