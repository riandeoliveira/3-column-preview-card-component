import styles from './Button.module.css';

const Button = props => {
    return (
        <button className={styles.button} style={{ color: props.textColor }}>Learn More</button>
    );
}

export default Button;