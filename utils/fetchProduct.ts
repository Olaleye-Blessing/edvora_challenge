import { Product } from "../interfaces/Index";
import { returnUniqueArray } from "./returnUniqueArray";

export const fetchProducts = async () => {
    let productUrl = `https://assessment-edvora.herokuapp.com/`;

    try {
        // throw new Error("Testing...");

        let req = await fetch(productUrl);
        let data = (await req.json()) as Product[];

        let productNames = data.map((product) => product.product_name);
        let products = returnUniqueArray(productNames);
        products = ["Products", ...products];

        let stateNames = data.map((product) => product.address.state);
        let states = returnUniqueArray(stateNames);
        states = ["State", ...states];

        let cityNames = data.map((product) => product.address.city);
        let cities = returnUniqueArray(cityNames);
        cities = ["City", ...cities];

        return { data, products, states, cities };
    } catch (error) {
        throw error;
    }
};
