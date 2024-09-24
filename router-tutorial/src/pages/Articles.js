import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
    const activStyle = {
        color : 'green',
        fontSize : 24,
    };

    return (
        <div>
            <Outlet/>
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
}

const ArticleItem = ({id}) => {
    const activStyle = {
        color : 'green',
        fontSize : 24,
    };

    return (
        <li>
            <NavLink 
                to={`/articles/${id}`}
                style={({isActive}) => (isActive? activStyle : undefined )}
            >
            article{id}
            </NavLink>
        </li>
    );
}

export default Articles;