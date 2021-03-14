/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/order */
import React from 'react';
import Head from 'next/head';
import { FaShoppingCart } from 'react-icons/fa';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import { useRouter } from 'next/router';
import styles from '../../styles/Product.module.css';
import { fetchProductStart } from '../../lib/reducers/product';
import { connect } from 'react-redux';
import axios from 'axios';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { withRouter } from "next/router"

// const mapStateToProps = state => ({
//   product: state.product,
// });

// const mapDispatchToProps = dispatch => ({
//   fetchProduct: id => dispatch(fetchProductStart(id)),
// });

class Product extends React.Component {

  // static async getInitialProps({ isServer, store }) {
  //   await store.execSagaTasks(isServer, dispatch => {
  //     dispatch(fetchProductStart());
  //   });
  //   console.log(store.getState().product);
  //   return {};
  // }
  constructor(props){
    super(props)
  }
  state = {
    product: {}
  }

  componentDidMount() {
    const { productId } = this.props.router.query;
    axios.get(`https://shift-management-project.herokuapp.com/api/product?id=` + productId)
      .then(res => {
        const product = res.data;
        this.setState({ product });
      })
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{this.state.product.name}</title>
        </Head>
        <Container>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.product}>
                <div className={styles.productImage}>
                  <img src={this.state.product.img} alt={`Preview of ${this.state.product.name}`} />
                </div>
                <div className={styles.productDetails}>
                  <h1>{this.state.product.name}</h1>
                  <p>{this.state.product.description}</p>
                  <p>{this.state.product.price} VND</p>
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
}

// export default connect(mapStateToProps, mapDispatchToProps)(Product);
export default withRouter(Product);