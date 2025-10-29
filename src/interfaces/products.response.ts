import type { Product } from "./Product.interface";

export interface ProductsResponse {
    count: number;
    pages: number;
    products: Product[];
}




