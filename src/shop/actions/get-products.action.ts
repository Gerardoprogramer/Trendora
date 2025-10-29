import { Api } from '@/api/Api'
import type { ProductsResponse } from '@/interfaces/products.response';


interface Options {
    limit?: number | string,
    offset?: number | string

}


export const getProductsAction = async (options: Options): Promise<ProductsResponse> => {

    const { limit, offset } = options;

    const { data } = await Api.get<ProductsResponse>('/products',
        {
            params:{
                limit,
                offset
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
