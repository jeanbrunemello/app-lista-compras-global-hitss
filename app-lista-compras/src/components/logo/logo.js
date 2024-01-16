import css from './style.css'
import logo from '../../assets/img/logo.svg'


function Logo() {
    return (
        <div className='flex'>
            <div className='logo'>
                <img src={logo} className='App-logo'></img>
            </div>
        </div>
    );
}

export default Logo;