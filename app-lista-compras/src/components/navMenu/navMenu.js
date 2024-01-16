import css from '../navMenu/style.css'
import Logo from '../logo/logo';

const navOpt = ['HOME', 'LISTAS', 'LOGIN']

function NavMenu() {
    return (
        <ul className='menu_lista'>
            {navOpt.map((opt) => (
                <li className='menu_itens'><p>{opt}</p></li>
            ))}
        </ul>
    );
}

export default NavMenu;