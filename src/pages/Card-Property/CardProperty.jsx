import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { IoLocationSharp } from "react-icons/io5";

const CardProperty = () => {
    const { id } = useParams();
    const [card, setCard] = useState(null);
    useEffect(() => {
        fetch('/card.json')
            .then(res => res.json())
            .then(data => {
                setCard(data.find((item) => item.id === id))

            })
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-16 p-4">
                {card ? (
                    <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100">
                        <figure>
                            <img
                                src={card.image}
                                alt="Shoes" />
                        </figure>
                        <div className="px-5">
                            <div className="grid md:grid-cols-4 grid-cols-1 justify-between">
                                <div className="col-span-3">
                                    <h2 className="text-3xl font-bold pb-3">{card.segment_name}</h2>
                                    <h2 className=" text-2xl font-bold py-2">
                                        {card.estate_title}
                                    </h2>

                                    <p className="text-xl font-bold py-2">{card.description}</p>

                                    <h2 className=" text-xl font-bold py-2">Status : {card.status.toUpperCase()}</h2>
                                    <h1 className="text-2xl font-bold">Our Facility:</h1>
                                    <ul className="list-disc pl-5  font-bold">
                                        {card.facilities.map((facility, index) => (
                                            <li key={index} className="capitalize">
                                                {facility.toUpperCase()}
                                            </li>
                                        ))}
                                    </ul>
                                    <h2 className="flex text-lg font-bold py-2">
                                        <IoLocationSharp className="my-auto" />
                                        {card.location}
                                    </h2>
                                </div>
                                <div className="flex justify-end">
                                    <p className="text-xl font-bold">{card.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CardProperty;
