import styles from './Header.module.css';

const Header = props => {
    return (
        <img src={props.icon} alt="Car icon" className={styles.image} />
    );
}

export default Header;