import css from './style.css'
import Logo from '../logo/logo';
import NavMenu from '../navMenu/navMenu';

function Header() {
    return (
        <div className='menu'>
            <div className='flex'>
                <Logo></Logo>
                <NavMenu></NavMenu>
            </div>
        </div>
    );
}

export default Header;