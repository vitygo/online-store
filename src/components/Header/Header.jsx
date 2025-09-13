import './Header.css'
import { PiHandbagFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import React, {useState, useEffect} from 'react'


export default function Header() {

    const [isOpen, setIsOpen] = useState(false)




    function handleHoverMode() {
        setIsOpen(false)
    }


    return(
        <header>
            <div className="navbar">
                <div className="navbar__logo">Logo</div>
                <div className="nabar__left-side">
                        
                    <div className="navbar__cart">
                        <button><PiHandbagFill color="white" size="30px"/></button>
                    </div>

                    <div className="navbar__drop-down-menu">
                        <button onClick={() => setIsOpen(prev => !prev)}><GiHamburgerMenu color="white" size="30px"/></button>
                
                    </div>

            

                </div>
              
          
                
            </div>
            <ul onMouseLeave={() => handleHoverMode()} className={`drop-down-menu__list ${isOpen ? 'open' : ''}`}>
                <li className="menu__elemnt menu__elemnt--dropdown">Furniture</li>
                <li className="menu__elemnt">Shop</li>
                <li className="menu__elemnt">About Us</li>
                <li className="menu__elemnt">Contact</li>
            </ul> 
        </header>
    )
}


