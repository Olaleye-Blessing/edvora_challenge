import { Product } from "../interfaces/Index";
import { returnUniqueArray } from "./returnUniqueArray";

export let filterCitiesWhenStateIsChosen = (
    newSelectedProduct: Product[],
    selectedState: string
) => {
    let states = newSelectedProduct.filter(
        (product) =>
            product.address?.state && product.address.state === selectedState
    );

    let newCities = states.map((state) => state.address.city);

    let uniqueNewCities = ["City", ...returnUniqueArray(newCities)];

    return uniqueNewCities;
};
