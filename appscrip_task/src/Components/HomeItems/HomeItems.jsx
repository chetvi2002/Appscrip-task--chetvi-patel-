import React, { useState, useEffect } from "react";
import styles from "./HomeItems.module.css";
import { SVG } from "../../Constants/SvgConstant";

const HomeItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.productsContainer}>
      {products.length > 0 ? (
        <div className={styles.cardsContainer}>
          {products.map((product) => (
            <div className={styles.card} key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{product.title}</div>
                <div className={styles.cardDescription}>
                  {product.description}
                </div>
                <div className={styles.cardPriceFavContainer}>
                  <div className={styles.cardPrice}>
                    Price: ${product.price}
                  </div>
                  <img
                    className={styles.heartImage}
                    src={SVG.Heart}
                    alt="Heart Logo"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
};

export default HomeItems;
