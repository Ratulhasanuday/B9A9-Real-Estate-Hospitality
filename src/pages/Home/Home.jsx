import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    const card = useLoaderData();
    // console.log(card);//n

    return (
        <div>
            <Navbar ></Navbar>
            <div className="pt-16">
                <Banner></Banner>
                <div>
                    <h2 className="text-2xl  text-center mt-10">Our Services</h2>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 m-5 gap-5">

                    {
                        card.map(cards => <Card key={cards.id} card={cards} ></Card>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;