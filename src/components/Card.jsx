import styles from './Card.module.css';

import Header from './header/Header';
import Main from './main/Main';
import Button from './button/Button';

const Card = props => {

    const { bgColor, borderRadius, icon, title, info, btnTextColor } = props.cardProps;

    return (
        <div className={styles.container} style={{ backgroundColor: bgColor, borderRadius: borderRadius }}>
            <Header icon={icon} />
            <Main title={title} info={info} />
            <Button textColor={btnTextColor} />
        </div>
    );
}

export default Card;