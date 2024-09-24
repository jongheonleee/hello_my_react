import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        // 이전 페이지로 이동 
        navigate(-1);
    };

    const goArticles = () => {
        // articles 경로로 이동 
        navigate('/articles', {replace: true});
    };

    return (
        <div>
            <header style={{background : 'lightgray', padding : 16, fontSize : 24}}>
                <button onClick={goBack}>go back!</button>
                <button onClick={goArticles}>go articles!!</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;