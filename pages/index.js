/* eslint-disable no-trailing-spaces */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import { fetchProductsStart } from '../lib/reducers/products';
import Container from '../components/Container';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: start => dispatch(fetchProductsStart(start)),
});

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ isServer, store }) {
    await store.execSagaTasks(isServer, dispatch => {
      dispatch(fetchProductsStart());
    });

    return {};
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Ecommere</title>
        </Head>
        <Container className={styles.homeContainer}>
          <div className={styles.grid}>
            {this.props.products.data.map(product => {
              return (
                <div key={product.id} className={styles.card}>
                  <Link href={`/products/${product.id}`}>
                    <a>
                      <img src={product.img} alt={`Preview of ${product.name}`} />
                      <h3>{product.name}</h3>
                      <p className={styles.cardDescription}>{product.description}</p>
                      <p>{product.price} VND</p>
                    </a>
                  </Link>
                  <p>
                    <Button type="primary" icon={<ShoppingCartOutlined />}>Add to Cart</Button>
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
