import { Product } from "../pages/HomePage";

const ProductCard = ({
    product_name,
    price,
    product_image
}: Product) => {
    return (
        <div>
            <img src={product_image} alt="" />
            <p>{product_name}</p>
            <p>{price}</p>
        </div>
    );
};

export default ProductCard;
