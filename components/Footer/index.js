import Container from '../Container';

import styles from './Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        &copy; ecommerce
      </Container>
    </footer>
  )
}

export default Footer;