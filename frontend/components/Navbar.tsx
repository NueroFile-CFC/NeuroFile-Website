import { Link } from "react-router-dom"
import { useState } from "react"
const Navbar = () => {
    const [burgerIcon, setBurgerIcon] = useState(false)

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
            <button id = 'navbar-toggle' onClick = {() => {setBurgerIcon(prev => !prev)}}>☰</button>
            <div id = {`navbar-links-${burgerIcon ? 'burger' : 'off'}`}>
            <Link to = '/' onClick = {() => {setBurgerIcon(prev => !prev)}}>Home</Link>
            <Link to = '/installation' onClick = {() => {setBurgerIcon(prev => !prev)}}>Installation</Link>
            <Link to = '/support' onClick = {() => {setBurgerIcon(prev => !prev)}}>Support</Link>
            <Link to = '/about' onClick = {() => {setBurgerIcon(prev => !prev)}}>About Us</Link>
            <Link to = '/contactus' onClick = {() => {setBurgerIcon(prev => !prev)}}>Contact Us</Link>
            </div>
        </div>
    )
}

export default Navbar