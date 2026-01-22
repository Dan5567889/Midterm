import styles from '../Styles/Mission.module.css';
import BI from '../assets/Bakes/background.jpg';
import Footer from '../Components/Footer';

function Mission (){
    return(
        <>
        <div className={styles.background}> 

            <div className={styles.text}> 
        <h2> Our Mission </h2>
        <h4> Handpicked, Artisanally Curates, Free Range, Sustainable,Small Batch, Fair Trade, Organic Tea </h4>
            </div>
        </div>

        <Footer />
        </>
    )
}
export default Mission;