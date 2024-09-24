import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <ul>
            <li>
                <Link to='/articles/1'>article1</Link>
            </li>
            <li>
                <Link to='/articles/2'>article2</Link>
            </li>
            <li>
                <Link to='/articles/3'>article3</Link>
            </li>
        </ul>
    );
}

export default Articles;