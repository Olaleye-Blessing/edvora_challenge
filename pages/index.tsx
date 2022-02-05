import type { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import { ProductFilter, Products, MetaHead } from "../components/Index";
import { MainPage } from "../components/Styles/MainPage";
import { FilterValues, ProductsAccumulator } from "../interfaces/Index";
import { fetchProducts } from "../utils/fetchProduct";
import { filterCitiesWhenStateIsChosen } from "../utils/filterCitiesWhenStateIsChosen";
import { filterStateWhenProductIsChosen } from "../utils/filterStateWhenProductIsChosen";
import { ProductsInfo, FilterArray } from "./../interfaces/Index";

const Home: NextPage = () => {
    const [productsInfo, setProductsInfo] = useState<ProductsInfo>({
        loading: true,
        error: null,
        data: null,
    });
    const [filterArray, setFilterArray] = useState<FilterArray>({
        products: [],
        states: [],
        cities: [],
    });

    const [filterValues, setFilterValues] = useState<FilterValues>({
        products: "Products",
        states: "State",
        cities: "City",
    });

    const getProducts = async () => {
        try {
            setProductsInfo((prev) => ({
                ...prev,
                loading: true,
                error: null,
            }));
            let { data, cities, products, states } = await fetchProducts();

            setProductsInfo((prev) => ({ ...prev, data }));
            setFilterArray({ products, states, cities });
            setProductsInfo((prev) => ({
                ...prev,
                loading: false,
            }));
        } catch (error) {
            console.log("there is an error");
            setProductsInfo((prev) => ({ ...prev, error: "null" }));
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    // group products by brand's name
    let groupedProducts = productsInfo.data?.reduce(
        (acc: ProductsAccumulator, cur) => {
            let key = cur["brand_name"];

            if (!acc[key]) {
                acc[key] = [];
            }

            acc[key].push(cur);

            return acc;
        },
        {}
    );

    const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        let { name, value } = e.target;

        if (name === "products") {
            setFilterValues((prev) => ({
                ...prev,
                [name]: value,
                // reset value of state to default
                states: "State",
            }));
        } else {
            setFilterValues((prev) => ({ ...prev, [name]: value }));
        }
    };

    let filteredArray = { ...filterArray };

    // store the selected products that have the selected product as name.
    // this also helps to narrow down
    let newSelectedProduct = productsInfo.data ? [...productsInfo.data] : [];

    let { products: selectedProduct, states: selectedState } = filterValues;

    // filter state when a product is chosen
    if (selectedProduct !== "Products" && productsInfo.data) {
        let uniqueNewStates = filterStateWhenProductIsChosen(
            productsInfo.data,
            selectedProduct,
            newSelectedProduct
        );

        filteredArray = { ...filteredArray, states: uniqueNewStates };
    }

    if (selectedState !== "State" && productsInfo.data) {
        let uniqueNewCities = filterCitiesWhenStateIsChosen(
            newSelectedProduct,
            selectedState
        );

        filteredArray = { ...filteredArray, cities: uniqueNewCities };
    }

    return (
        <>
            <MetaHead />

            <MainPage>
                <ProductFilter
                    filterArray={filteredArray}
                    filterValues={filterValues}
                    handleFilterChange={handleFilterChange}
                />

                {productsInfo.loading ? (
                    <div>Loading....</div>
                ) : productsInfo.error ? (
                    <>
                        <p>There is an error</p>
                        <button onClick={getProducts}>Try Again</button>
                    </>
                ) : (
                    <section className="page__main">
                        <header>
                            <h1>Edvora</h1>
                        </header>

                        <h2 className="page__products">Products</h2>

                        {groupedProducts && (
                            <Products groupedProducts={groupedProducts} />
                        )}
                    </section>
                )}
            </MainPage>
        </>
    );
};

export default Home;
