import css from './style.css'
import Logo from '../logo/logo';
import NavMenu from '../navMenu/navMenu';

function Header() {
    return (
        <header className='NavOpt'>
            <div className='flex'>
                <Logo></Logo>
                <NavMenu></NavMenu>
            </div>
        </header>
    );
}

export default Header;