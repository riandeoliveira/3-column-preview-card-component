import styles from './Main.module.css';

const Main = props => {
    return (
        <>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.paragraph}>{props.info}</p>
        </>
    );
}

export default Main;