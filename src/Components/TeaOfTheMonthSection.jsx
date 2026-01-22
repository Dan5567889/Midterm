import I1 from '../assets/Bakes/berryblitz.jpg';
import I2 from '../assets/Bakes/spiced-rum.jpg';
import I3 from '../assets/Bakes/img-donut.jpg';
import I4 from '../assets/Bakes/myrtle-ave.jpg';
import I5 from '../assets/Bakes/bedford-bizarre.jpg';

import Footer from '../Components/Footer';

import styles from '../Styles/TeaOfTheMonthSection.module.css';

function TeaOfTheMonthSection() {
    return (
        <div classname={styles.background}>
            <div className={styles.text}> 
            <h2>Tea of the Month</h2>
            <p>What's Steeping at The Tea Cozy?</p>
            </div>

            <div className={styles.teaItem}>
                <div>
                    <img src={I1} alt="Gallery Image 1" />
                    <p>Fall Berry Blitz Tea </p>
                </div>

                <div>
                    <img src={I2} alt="Gallery Image 1" />
                    <p>Spiced Rum Tea </p>
                </div>

                <div>
                    <img src={I3} alt="Gallery Image 1" />
                    <p>Seasonal Donuts</p>
                </div>
                </div>
                <div className={styles.teaItem2}>
                <div>
                    <img src={I4} alt="Gallery Image 1" />
                    <p>Myrtle Ave Tea </p>
                </div>

                <div>
                    <img src={I5} alt="Gallery Image 1" />
                    <p>Bedford Bizarre Tea </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default TeaOfTheMonthSection;