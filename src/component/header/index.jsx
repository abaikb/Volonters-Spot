import './style.css'

import HamburgerIcon from '../image/bars.png'
import HamburgerMenu from './sidebar.jsx'
import Sidebar from './sidebar'
import { NavLink } from 'react-router-dom'

export function Header() {
    // const App = () => {
    //     const [isOpen, setIsOpen] = useState(false);
      
    //     const handleToggle = () => {
    //       setIsOpen(!isOpen);
    //     }
      
    //     return (
    //       <div>
    //         <MenuIcon onClick={handleToggle} />
    //         {isOpen && <Sidebar setIsOpen={setIsOpen} />}
    //       </div>
    //     );
    //   }

    return (
        <>
        <div className="header">
          <NavLink to='/' className='logo'>Volunteer's <span>spot</span></NavLink>
            <img className='hamburgerIcon' src={HamburgerIcon} alt="" />
            
            <NavLink to="/about">
              <button className='about'>О нас</button>
            </NavLink>
            <NavLink to="/events">
              <button className='events'>События</button>
            </NavLink>
            <NavLink to="/signup">
              <button className='signup'>Зарегистрироваться</button>
            </NavLink>
            <NavLink to="/login">
              <button className='login'>Войти</button>
            </NavLink> 
        </div>
        
        </>
    )
}
 export default HamburgerIcon;

