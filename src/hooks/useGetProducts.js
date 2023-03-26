import { useState, useEffect } from "react";
import axions from "axios";

const useGetProducts = (API) => {

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axions(API);
    setProducts(response.data);
  }, []);

  return products;
};

export default useGetProducts;
