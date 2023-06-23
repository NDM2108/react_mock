import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductItem } from "../../components/ProductItem";
import { productRepository } from "../../repository/productRepository";
import { useSearchParams } from "react-router-dom";

export const Search = () => {
  const [params] = useSearchParams();
  const [listProduct, setListProduct] = useState([]);

  const keyword = params.get("keyword");

  useEffect(() => {
    const fetchData = async () => {
      const products = await productRepository.searchProducts(keyword);
      setListProduct(products.data.products.result);
    };

    fetchData();
  }, [keyword]);

  return (
    <div>
      <Header />
      <div className="home-content">
        <div className="title">Search products</div>
        <div className="product-list">
          {listProduct.map((e) => {
            return <ProductItem product={e} key={`product-item-${e.id}`} />;
          })}
        </div>
      </div>
    </div>
  );
};
