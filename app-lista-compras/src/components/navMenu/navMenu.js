import css from '../navMenu/style.css'
import Logo from '../logo/logo';

const navOpt = ['HOME', 'LISTAS', 'LOGIN']

function NavMenu() {
    return (
        <ul>
            {navOpt.map((opt) => (
                <li className='opcao'><p>{opt}</p></li>
            ))}
        </ul>
    );
}

export default NavMenu;