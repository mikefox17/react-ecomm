import styles from './Header.module.scss';
const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <div>
                    <p>LOGO</p>
                </div>
                <div>
                    <p className='logo'>🏪</p>
                </div>
                <div>
                    <p>MENU</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
