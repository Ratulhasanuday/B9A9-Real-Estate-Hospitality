import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Card from "../Card/Card";

const OurService = (   ) => {
    const card = useLoaderData();
    console.log(card);
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-16">
                <div className="grid md:grid-cols-3 grid-cols-1 m-5 gap-5  ">

                    {
                        card.map(cards => <Card key={cards.id} card={cards} ></Card>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurService;