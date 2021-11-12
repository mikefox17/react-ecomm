import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <div>
                    <p>LOGO</p>
                </div>
                <Link to='/'>
                    <div>
                        <p className='logo'>🏪</p>
                    </div>
                </Link>
                <div>
                    <p>MENU</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
