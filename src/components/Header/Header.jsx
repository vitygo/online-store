import './Header.css'
import { PiHandbagFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import React, {useState, useEffect, useRef} from 'react'


export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const menuRef = useRef(null)


    useEffect(() => {

        const setFunction = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        
        }


       let timeoutId;

        if (isOpen) {
            timeoutId = setTimeout(() => {
                document.addEventListener('click', setFunction);
            }, 0);
        }

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('click', setFunction);
         
          }


    },[isOpen])

    


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
            <ul ref={menuRef} className={`drop-down-menu__list ${isOpen ? 'open' : ''}`}>
                <li className="menu__elemnt menu__elemnt--dropdown">Furniture</li>
                <li className="menu__elemnt">Shop</li>
                <li className="menu__elemnt">About Us</li>
                <li className="menu__elemnt">Contact</li>
            </ul> 
        </header>
    )
}


