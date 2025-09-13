import './Header.css'
import { PiHandbagFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Header() {
    return(
        <header>
            <div className="navbar">
                <div className="navbar__logo">Logo</div>
                <div className="nabar__left-side">
                        
                    <div className="navbar__cart">
                        <button><PiHandbagFill color="white" size="30px"/></button>
                    </div>

                    <div className="navbar__drop-down-menu">
                        <GiHamburgerMenu color="white" size="30px"/>
                    </div>

                </div>
          
                
            </div>
        </header>
    )
}


   {/* <ul className="navbar__menu">

                    <li className="menu__elemnt menu__elemnt--dropdown">Furniture</li>
                    <li className="menu__elemnt">Shop</li>
                    <li className="menu__elemnt">About Us</li>
                    <li className="menu__elemnt">Contact</li>
                </ul> */}