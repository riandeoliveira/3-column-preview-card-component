import firstIcon from '../assets/icons/icon-sedans.svg';
import middleIcon from '../assets/icons/icon-suvs.svg';
import lastIcon from '../assets/icons/icon-luxury.svg';

const getRootColors = property => {
    const computedStyle = getComputedStyle(document.documentElement);
    const color = computedStyle.getPropertyValue(property);

    return color;
}

const cardData = [
    {
        bgColor: getRootColors('--first-card-color'),
        borderRadius: '10px 0 0 10px',
        icon: firstIcon,
        title: 'Sedans',
        info: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        btnTextColor: getRootColors('--first-btn-text-color'),
    },

    {
        bgColor: getRootColors('--middle-card-color'),
        borderRadius: '0px',
        icon: middleIcon,
        title: 'Suvs',
        info: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        btnTextColor: getRootColors('--middle-btn-text-color'),
    },

    {
        bgColor: getRootColors('--last-card-color'),
        borderRadius: '0 10px 10px 0',
        icon: lastIcon,
        title: 'Luxury',
        info: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        btnTextColor: getRootColors('--last-btn-text-color'),
    }
];

if (window.innerWidth <= 960) {
    cardData[0].borderRadius = '10px 10px 0 0';
    cardData[2].borderRadius = '0 0 10px 10px';
}

export default cardData;