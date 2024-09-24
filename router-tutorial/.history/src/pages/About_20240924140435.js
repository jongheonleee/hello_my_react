import {useLocation} from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({ mode, detail : detail === 'true' ? false : true});
    
    };

    const onIncreasMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({ mode : nextMode, detail});
    };


    return (
        <div>
            <h1>introduce</h1>
            <p>this is ....</p>
         
        </div>
    );
};

export default About;