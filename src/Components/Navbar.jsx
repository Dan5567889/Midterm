import styles from '../Styles/Navbar.module.css';
import l1 from '../assets/Bakes/logo.png';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className={styles.navbar}>
        <img src={l1} alt="Logo" className={styles.logo}/> 
        
        <ul className={styles.ul}>
                <li> <Link to='/'> Mission </Link> </li>
                <li> <Link to='/Featured_Tea'> Featured Tea </Link> </li>
                <li> <Link to='/Locations'> Locations </Link> </li>
            </ul>

        </nav>
        </>
    )
}
export default Navbar;