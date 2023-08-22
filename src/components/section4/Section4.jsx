import styles from './Section4.module.css';
import  beehive  from './images/beehive.jpg';
import  bull  from './images/bull.jpg';
import  cafe  from './images/cafe.jpg';
import  family1  from './images/family1.jpg';
import  roses  from './images/roses.jpg';
import  stars  from './images/stars.jpg';
import  TUMO  from './images/TUMO.jpg';

function Section4() {
   return (
      <section className={styles.section}>
         <h1>M Y&nbsp; &nbsp;L A S T&nbsp; &nbsp;W O R K S</h1>
         <div className={styles.photos}>
            <div className={styles.row}>
               <img className={styles.photo} src={beehive} alt='beehive' width='350px' height='350px' />
               <img className={styles.photo} src={family1} alt='family' width='700px' height='350px' />
            </div>
            <div className={styles.row}>
               <img className={styles.photo} src={ bull } alt='bull' width='350px' height='350px' />
               <img className={styles.photo} src={ cafe } alt='cafe' width='350px' height='350px' />
               <img className={styles.photo} src={ stars } alt='stars' width='350px' height='350px' />
            </div>
            <div className={styles.row}>
               <img className={styles.photo} src={ roses } alt='roses' width='700px' height='350px' />
               <img className={styles.photo} src={ TUMO } alt='TUMO' width='350px' height='350px' />
            </div>
         </div>
      </section>
   )
};

export default Section4;