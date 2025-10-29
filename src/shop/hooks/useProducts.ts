import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.action"
import { useParams, useSearchParams } from "react-router"


export const useProducts = () => {

  const [searchParams] = useSearchParams();

  const limit = searchParams.get('limit') || 9;
  const page = searchParams.get('page') || 1;
  const { gender } = useParams();
  const sizes = searchParams.get('sizes') || undefined;

  const offset = (Number(page) - 1) * Number(limit);

  const price = searchParams.get('price') || undefined

  const [minPrice, maxPrice] =
    price && price !== 'any'
      ? price?.includes('-')
        ? price?.split('-').map(Number)
        : [Number(price?.replace('+', '')), undefined]
      : [undefined, undefined]


  return useQuery({
    queryKey: ['products', { limit, offset, gender, sizes, maxPrice, minPrice }],
    queryFn: () => getProductsAction({
      limit: isNaN(+limit) ? 9 : limit,
      offset: isNaN(offset) ? 0 : offset,
      gender: gender,
      sizes: sizes,
      maxPrice: maxPrice,
      minPrice: minPrice
    }),
    staleTime: 1000 * 60 * 5,
    placeholderData: (previousData) => previousData,
  })
}
