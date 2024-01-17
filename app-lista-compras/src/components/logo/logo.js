import css from './style.css'
import logo from '../../assets/img/logo.svg'
import { Link } from '@mui/material';


function Logo() {
    return (
        <div className='flex'>
            <div className='logo'>
                <Link to="/">
                <img src={logo} className='App-logo'></img>
                </Link>
            </div>
        </div>
    );
}

export default Logo;