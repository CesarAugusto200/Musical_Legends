import { Link, NavLink } from 'react-router-dom';
import style from "../assets/Style/Navbar.css"
function Navbar(){
    return(
            <nav className='navcontainer'>

                <Link 
                className="text1" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar">
                <div className="navbar-nav">

                    <NavLink 
                        className="text2" 
                        to="/Canto"
                    >
                        Cursos De Canto
                    </NavLink>

                    <NavLink 
                        className="text3" 
                        to="/Musica"
                    >
                        Cursos De Musica
                    </NavLink> 

                    
                 

                </div>
            </div>
            </nav>
    )
}
export default Navbar;