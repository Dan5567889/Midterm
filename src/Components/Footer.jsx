import styles from '../Styles/Footer.module.css';

function Footer() {
  return (
    <footer>
      <h1> The Tea Cozy</h1>
      <h5>Contact@theteacozy.com</h5>
      <p>917-555-8904</p>

    <p className={styles.copyright}>copyright The Tea Cozy 2017 </p>

    </footer>
  );
}
export default Footer;