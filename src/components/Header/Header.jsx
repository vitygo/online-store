import './Header.css'
import { PiHandbagFill } from "react-icons/pi";



export default function Header() {
    return(
        <hero>
            <div className="navbar">
                <div className="navbar__logo">Logo</div>
                <ul className="navbar__menu">
                    <li className="menu__elemnt menu__elemnt--dropdown">Furniture</li>
                    <li className="menu__elemnt">Shop</li>
                    <li className="menu__elemnt">About Us</li>
                    <li className="menu__elemnt">Contact</li>
                </ul>
                <div className="navbar__cart">
                <button><PiHandbagFill color="white" size="30px"/></button>
                </div>
            </div>
        </hero>
    )
}