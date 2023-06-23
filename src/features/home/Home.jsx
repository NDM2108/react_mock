import { Carousel } from "antd";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { productRepository } from "../../repository/productRepository";
import { ProductItem } from "../../components/ProductItem";

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
        <Carousel autoplay className="carousel">
          {listProduct.slice(0, 2).map((e) => {
            return (
              <img
                src={
                  e.images[0].url ??
                  "https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png"
                }
                alt=""
                className="carousel-item"
                key={`carousel-${e.id}`}
              />
            );
          })}
        </Carousel>
        <div className="title">Lastest products</div>
        <div className="product-list">
          {listProduct.map((e) => {
            return <ProductItem product={e} key={`product-item-${e.id}`} />;
          })}
        </div>
      </div>
    </div>
  );
};
