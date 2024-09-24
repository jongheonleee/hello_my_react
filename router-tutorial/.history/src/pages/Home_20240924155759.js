import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>hello world!</p>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/profiles/velopert'>velopert의 프로필</Link>
                </li>
                <li>
                    <Link to='/profiles/gildong'>gildong의 프로필</Link>
                </li>
                <li>
                    <Link to='/profiles/void'>존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to='/articles'>Articles</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;