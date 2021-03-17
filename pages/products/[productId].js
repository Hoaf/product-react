import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import { useRouter } from 'next/router';
import styles from '../../styles/Product.module.css';
import axios from 'axios';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Product() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  useEffect(() => {
    axios.get(`https://shift-management-project.herokuapp.com/api/product?id=${router.query.productId}`)
      .then(res => {
        setProduct(res.data);
      })
  }), [];

  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Container>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.product}>
              <div className={styles.productImage}>
                <img src={product.img} alt={`Preview of ${product.name}`} />
              </div>
              <div className={styles.productDetails}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price} VND</p>
                <p>
                  <Button type="primary" icon={<ShoppingCartOutlined />}>Add to Cart</Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Product;