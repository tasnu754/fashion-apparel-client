import { Outlet } from "react-router-dom";


const MainPage = () => {
    return (
        <div className="font-roboto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;