export interface Product {
    product_name: string;
    brand_name: string;
    price: number;
    address: {
        state: string;
        city: string;
    };
    discription: string;
    date: string;
    time: string;
    image: string;
}

export interface ProductsInfo {
    loading: boolean;
    error: string | null;
    data: null | Product[];
}

export interface FilterArray {
    products: string[];
    states: string[];
    cities: string[];
}

export interface FilterValues {
    products: string;
    states: string;
    cities: string;
}

export interface ProductsAccumulator {
    [key: string]: Product[];
}
