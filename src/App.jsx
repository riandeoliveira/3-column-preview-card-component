import Card from "./components/Card";

import data from './data/data';

const App = () => {

    const [firstCardProps, middleCardProps, lastCardProps] = data;

    return (
        <>
            <Card cardProps={firstCardProps}/>
            <Card cardProps={middleCardProps}/>
            <Card cardProps={lastCardProps}/>
        </>
    );
}

export default App;