import Image from "next/image";
import { FC } from "react";
import { Product as ProductProps } from "../../interfaces/Index";
import productImage from "./../../assests/images/productImage.svg";
import { StyledProduct } from "./StyledProduct";

interface IProduct {
    product: ProductProps;
}

const Product: FC<IProduct> = ({ product }) => {
    let productDate = new Date(product.date);
    var day = productDate.getUTCDate();
    var month = productDate.getUTCMonth() + 1; //months from 1-12
    var year = productDate.getUTCFullYear();

    let date = `${day}:${month}:${year}`;

    return (
        <StyledProduct tabIndex={0}>
            <div className="product__cont">
                <div className="product__cont-first">
                    <figure className="product__fig">
                        <Image
                            src={productImage}
                            alt="product image"
                            width={300}
                            height={300}
                            objectFit="cover"
                        />
                    </figure>
                    <p
                        aria-label="product's location"
                        className="product__location"
                    >
                        Location
                    </p>
                </div>
                <div className="product__cont-second">
                    <p aria-label="product name" className="product__name">
                        {product.product_name}
                    </p>
                    <p aria-label="brand name" className="product__brand">
                        {product.brand_name}
                    </p>
                    <p aria-label="product's price" className="product__price">
                        ${product.price}
                    </p>
                    <p aria-label="product's date" className="product__date">
                        Date: {date}
                    </p>
                </div>
            </div>
            <p
                aria-label="product's description"
                className="product__discription"
            >
                {product.discription}
            </p>
        </StyledProduct>
    );
};

export default Product;
