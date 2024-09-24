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
                <li>
                    <NavLink 
                        to='/articles/1'
                        style={({isActive}) => (isActive ? activStyle : undefined )}
                    >
                    article1
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/articles/2'
                        style={({isActive}) => (isActive ? activStyle : undefined )}
                    >
                    article2
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/articles/3'
                        style={({isActive}) => (isActive ? activStyle : undefined )}
                    >
                    article3
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Articles;