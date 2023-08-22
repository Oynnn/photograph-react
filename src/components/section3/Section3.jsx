import styles from './Section3.module.css';
import { MdOutlineLandscape, MdOutlinePortrait, MdFamilyRestroom } from 'react-icons/md';
import { GiPlantsAndAnimals } from 'react-icons/gi';

function Section3() {
   return (
      <section className={styles.section}>
         <div className={styles.container}>
            <h1>W H A T&nbsp; &nbsp;A M&nbsp; &nbsp;I</h1>
            <h1>P H O T O G R A P H I N G ?</h1>
            <div className={styles.icons}>
               <div className={styles.icon}>
                  <MdOutlinePortrait size='120px' />
                  <span>P o r t r a i t s</span>
               </div>
               <div className={styles.icon}>
                  <MdOutlineLandscape size='120px' />
                  <span>L a n d s c a p e s</span>
               </div>
               <div className={styles.icon}>
                  <MdFamilyRestroom size='120px' />
                  <span>P e o p l e</span>
               </div>
               <div className={styles.icon}>
                  <GiPlantsAndAnimals size='120px' />
                  <span>A n i m a l s&nbsp; &nbsp;a n d&nbsp; &nbsp;p l a n t s</span>
               </div>
            </div>
         </div>
      </section>
   )
};

export default Section3;