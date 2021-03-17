import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import makeStore from '../lib/store';
import Container from '../components/Container';
import '../styles/globals.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <div>
        <Container>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
          />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </div>
    );
  }
}

export default withRedux(makeStore)(MyApp);
