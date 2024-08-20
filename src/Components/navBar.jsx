import { NavLink } from'react-router-dom';
import './Nav.css';
function navbar(){
    return(
        <nav>
            <ul>
                <li><NavLink to="/useState">useState</NavLink></li>
                <li><NavLink to="/useEffect">useEffect</NavLink></li>
                <li><NavLink to="/useMemo">useMemo</NavLink></li>
                <li><NavLink to="/useRef">useRef</NavLink></li>
                <li><NavLink to="/nested_one">NestedPage</NavLink></li>
            
            </ul>
        </nav>
    )

}

export default navbar;