import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { productRepository } from "../../repository/productRepository";
import { ProductItem } from "../../components/ProductItem";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await productRepository.getAllProducts();
      setListProduct(products.data.result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="home-content">
        <div className="advertisement">
          <div
            className="ad one fade-go-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="text">Shopping</div>
          </div>
          <div
            className="ad two fade-go-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="text">New arrival</div>
          </div>
          <div
            className="ad three fade-go-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="text">Buy now</div>
          </div>
          <div
            className="ad four fade-go-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="text">Contacts</div>
          </div>
        </div>
        <div className="title">Lastest products</div>
        <div className="product-list">
          {listProduct.map((e, index) => {
            return (
              <ProductItem
                product={e}
                key={`product-item-${e.id}`}
                delay={index * 100}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
