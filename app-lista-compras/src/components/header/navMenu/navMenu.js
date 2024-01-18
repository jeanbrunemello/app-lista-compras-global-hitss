import css from './style.css'
import { Link } from 'react-router-dom';


function NavMenu() {
    const navOpt = ['HOME', 'LISTAS', 'LOGIN']
    
    return (
        <ul className='menu-lista'>
            {navOpt.map((opt) => (
                <Link to={opt.toLowerCase()}>
                    <li className='menu-itens'><p>{opt}</p></li>
                </Link>
            ))}
        </ul>
    );
}

export default NavMenu;