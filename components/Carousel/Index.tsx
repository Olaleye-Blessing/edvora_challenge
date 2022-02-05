import { FC, useState } from "react";
import { StyledCarousel } from "./styles";

interface ICarousel {
    items: JSX.Element[] | FC[];
}

const Index: FC<ICarousel> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    let translateX = activeIndex * 100;

    const updateActiveIndex = (newIndex: number) => {
        // let itemsLength = items.length;
        let itemsLength = Math.ceil(items.length / 4);

        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= itemsLength) {
            newIndex = itemsLength - 1;
        }

        setActiveIndex(newIndex);
    };

    return (
        <StyledCarousel>
            <button
                className="carousel__control carousel__control-prev"
                onClick={() => {
                    updateActiveIndex(activeIndex - 1);
                }}
            >
                prev
            </button>
            <ul
                className="carousel__inner"
                style={{ transform: `translateX(-${translateX}%)` }}
            >
                {items.map((Item, i) => (
                    <li className="carousel__item" key={i}>
                        {Item}
                    </li>
                ))}
            </ul>
            <button
                className="carousel__control carousel__control-next"
                onClick={() => {
                    updateActiveIndex(activeIndex + 1);
                }}
            >
                next
            </button>
        </StyledCarousel>
    );
};

export default Index;
