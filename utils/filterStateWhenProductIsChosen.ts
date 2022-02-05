import { Product } from "../interfaces/Index";
import { returnUniqueArray } from "./returnUniqueArray";

export const filterStateWhenProductIsChosen = (
    products: Product[],
    selectedProduct: string,
    newSelectedProduct: Product[]
) => {
    // return the products that have the selected product as name
    let newProducts = products.filter(
        (product) => product.product_name === selectedProduct
    );
    newSelectedProduct = [...newProducts];

    // extract the products' states
    let newStates = newProducts.map((product) => product.address.state);

    // filter out duplicate
    let uniqueNewStates = ["State", ...returnUniqueArray(newStates)];

    return uniqueNewStates;
};
