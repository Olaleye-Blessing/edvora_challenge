import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC } from "react";
import { ProductsAccumulator } from "../../interfaces/Index";
import { Carousel, Product } from "./../../components/Index";
import { Container } from "./Styles";
import "@splidejs/splide/dist/css/splide.min.css";

interface IProducts {
    groupedProducts: ProductsAccumulator;
}

const Index: FC<IProducts> = ({ groupedProducts }) => {
    return (
        <>
            {Object.keys(groupedProducts).map((productName) => {
                let products = groupedProducts![productName];

                return (
                    <Container key={productName}>
                        <h3>{productName}</h3>

                        <Splide
                            className="slider"
                            options={{
                                drag: true,
                                gap: "3rem",
                                perPage: 4,
                                perMove: 2,
                                pagination: false,

                                breakpoints: {
                                    500: {
                                        perPage: 1,
                                        perMove: 1,
                                    },

                                    850: {
                                        perPage: 2,
                                        perMove: 1,
                                        gap: "2.5rem",
                                    },

                                    1100: {
                                        perPage: 3,
                                        perMove: 2,
                                    },
                                },
                            }}
                        >
                            {products.map((product, i) => (
                                <SplideSlide key={i}>
                                    <Product product={product} />
                                </SplideSlide>
                            ))}
                        </Splide>

                        {/* <Carousel items={productsCarousel} /> */}
                        {/* <div className="carousel">
                            <ul className="carousel__inner">
                                {products.map((product, i) => (
                                    <li key={i} className="carousel__item">
                                        <Product product={product} />
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </Container>
                );
            })}
        </>
    );
};

export default Index;
