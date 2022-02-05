import { ChangeEventHandler, FC } from "react";
import { FilterArray, FilterValues } from "../../interfaces/Index";
import { Select } from "../Index";
import { StyledProductFilter } from "./Styles";

interface IProductFilter {
    filterArray: FilterArray;
    filterValues: FilterValues;
    handleFilterChange: ChangeEventHandler<HTMLSelectElement>;
}

const ProductFilter: FC<IProductFilter> = ({
    filterArray,
    filterValues,
    handleFilterChange,
}) => {
    return (
        <StyledProductFilter className="aside page__side">
            {/* <div> */}
            <p className="aside__filter-head">Filter</p>

            <Select
                id="products"
                name="products"
                options={filterArray.products}
                value={filterValues.products}
                onChange={handleFilterChange}
                others={{ "aria-label": "Select a product" }}
            />
            <Select
                id="states"
                name="states"
                options={filterArray.states}
                value={filterValues.states}
                onChange={handleFilterChange}
                others={{ "aria-label": "Select a state" }}
            />
            <Select
                id="cities"
                name="cities"
                options={filterArray.cities}
                value={filterValues.cities}
                onChange={handleFilterChange}
                others={{ "aria-label": "Select a city" }}
            />
            {/* </div> */}
        </StyledProductFilter>
    );
};

export default ProductFilter;
