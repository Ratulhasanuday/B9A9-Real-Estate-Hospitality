import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { image, segment_name, button_text, estate_title, description, price, id } = card;
    
    return (
        <div className="card bg-base-100  shadow-xl">

            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="p-5">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold">{segment_name}</h2>
                    <p className="text-xl font-bold">{price}</p>
                </div>
                <h2 className="text-xl">
                    {estate_title}
                </h2>

                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn">
                        <Link to={`/card/${id}`}>
                            {button_text}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;