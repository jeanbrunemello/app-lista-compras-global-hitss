import css from './style.css'
import Logo from '../../logo/logo';
import { Link } from 'react-router-dom';

const navOpt = ['HOME', 'LISTAS', 'LOGIN']

function NavMenu() {
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