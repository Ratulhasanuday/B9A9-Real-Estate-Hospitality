import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const CardProperty = () => {
    const {id}=useParams();

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-16">
                <h1>card details{id}</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CardProperty;