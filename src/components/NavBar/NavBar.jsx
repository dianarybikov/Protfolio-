import { useState, useEffect } from 'react';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0)
    const location = useLocation()
    
    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if(width > 800){
            setOpen(true)
        }
    }

    const handleClick = () => {
        if(screenWidth < 800){
            setOpen(false)
        }
    }

    useEffect(() => {
        trackScreenWidth()
        window.addEventListener("resize",trackScreenWidth)
        return () => window.removeEventListener("resize",trackScreenWidth)
    }, [])

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <Link to="/">
                        <img 
                            src={`${process.env.PUBLIC_URL}/diana-logo.png`}
                            alt="brand"
                            className="img-logo"
                        />
                    </Link>

                </div>
            <div className="list-wrapper">
                <img 
                    src="https://img.pngio.com/bar-menu-menu-bar-ui-icon-menu-bar-png-512_512.png"
                    alt="menu bars"
                    style={{opacity: !open ? 1 : 0}}
                    onClick={()=> {setOpen(!open)}}
                />

                    
                <img 
                    src="https://cdn4.iconfinder.com/data/icons/software-menu-icons/256/SoftwareIcons-67-512.png" 
                    alt="menu cross"
                    style={{opacity: open ? 1 : 0}}
                    onClick={()=>{setOpen(!open)}}
                />
                <ul style={{left: open? "0" : "-100vw"}}>
                    <li className="list-items">
                        <Link 
                        onClick={handleClick} 
                        style={{color: location.pathname === "/" && "#83a38d"}} 
                        to="/"
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={handleClick} 
                        style={{color: location.pathname === "/about" && "#83a38d"}} 
                        to="/about"
                        >
                        About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={handleClick} 
                        style={{color: location.pathname === "/resume" && "#83a38d"}} 
                        to="/resume"
                        >
                        Resume
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={handleClick} 
                        style={{color: location.pathname === "/contact" && "#83a38d"}} 
                        to="/contact"
                        >
                        Contact
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={handleClick} 
                        style={{color: location.pathname === "/Blog" && "#83a38d"}} 
                        to="/blog"
                        >
                        Blog
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default NavBar
