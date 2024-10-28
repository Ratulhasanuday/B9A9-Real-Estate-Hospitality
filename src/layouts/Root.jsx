import { Outlet } from "react-router-dom"

const Root = () => {
    return (

        <div className="max-w-full mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;