import { Product } from "../pages/HomePage";
import { Link } from "react-router-dom";

const ProductCard = ({ product_name, price, product_image, id }: Product) => {
    return (
        <Link to={`/product/${id}`}>
            <div className="flex flex-col bg-background p-5 shadow-lg rounded-lg overflow-hidden hover:scale-102 transition-transform duration-300">
                <img
                    src={product_image}
                    alt={product_name}
                    className=" m-auto"/>
                <div className="flex flex-col justify-between h-full">
                    <p className=" hover:text-teal-800">{product_name}</p>
                    <p className=" pt-5">{price} грн</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
