import { Api } from '@/api/Api'
import type { ProductsResponse } from '@/interfaces/products.response';


interface Options {
    limit?: number | string,
    offset?: number | string
    gender?: string
    sizes?: string
    maxPrice?: number;
    minPrice?: number;
}


export const getProductsAction = async (options: Options): Promise<ProductsResponse> => {

    const { limit, offset, gender, sizes, maxPrice, minPrice } = options;

    const { data } = await Api.get<ProductsResponse>('/products',
        {
            params:{
                limit,
                offset,
                gender,
                sizes,
                maxPrice,
                minPrice
            }
        }
    );

    const productsWithImageUrls = data.products.map((product) => ({
        ...product,
        images: product.images.map(
            Image => `${import.meta.env.VITE_API_URL}/files/product/${Image}`
        )
    }))

    return {
        ...data,
        products: productsWithImageUrls
    }
}
