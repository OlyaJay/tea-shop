import { Product } from "../pages/HomePage";

const ProductCard = ({ product_name, price, product_image }: Product) => {
    return (
        <div className="flex flex-col bg-background p-5 shadow-lg rounded-lg overflow-hidden hover:scale-102 transition-transform duration-300">
            <img src={product_image} alt={product_name} className=" m-auto"/>
            <div className="flex flex-col justify-between h-full">
                <p>{product_name}</p>
                <p className=" pt-5">{price} грн</p>
            </div>
        </div>
    );
};

export default ProductCard;
