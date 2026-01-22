import styles from '../Styles/Locations.module.css';
import Footer from './Footer';

function Locations() {
  return (
    <> 
    <div className={styles.background}>
        <h2 className={styles.text}>Locations</h2>
        <div className={styles.boxes}>
      
            <div className={styles.box1}>
                <h3>Downtown</h3>
                <p>384 West 4th St</p>
                <p>Suite 108</p>
                <p>Portland,Maine</p>
            </div>

            <div className={styles.box1}>
                <h3>East Bayside</h3>
                <p>3433 Phisherman's Avenue</p>
                <p>(Northwest Corner)</p>
                <p>Portland,Maine</p>
            </div>

            <div className={styles.box1}>
                <h3>Oakdale</h3>
                <p>515 Crescent Avenue</p>
                <p>Second Floor</p>
                <p>Portland,Maine</p>
            </div>


        </div>
    </div>
    <Footer />
    </>
  );
}
export default Locations;