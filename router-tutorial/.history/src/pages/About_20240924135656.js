import {useLocation} from 'react-router-dom';

const About = () => {
    const location = useLocation();

    return (
        <div>
            <h1>introduce</h1>
            <p>this is ....</p>
            <p>query string : {location.search}</p>
        </div>
    );
};

export default About;