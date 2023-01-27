import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useProducts = () => {
  const { data, error, isValidating, ...rest } = useSWR(
    "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC",
    fetcher
  );

  return {
    ...rest,
    products: data,
    isLoading: !data && isValidating,
    isError: error,
  };
};

export default useProducts;
