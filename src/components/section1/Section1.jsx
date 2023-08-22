import styles from './Section1.module.css';
import { SlSocialVkontakte } from 'react-icons/sl';
import { LiaTelegramPlane } from 'react-icons/lia';
import { PiInstagramLogo } from 'react-icons/pi';

function Section1() {
   return (
      <section className={styles.section}>
         <div className={styles.container}>
            <div className={styles.text}>
               <h1>I'm a photographer</h1>
               <h4>H r a n t&nbsp; &nbsp;B a g h d a s a r y a n</h4>
            </div>
            <div className={styles.links}>
               <a href='https://vk.com/kavo_o' target='_blank'><SlSocialVkontakte className={styles.link} size='35px' /></a>
               <a href='https://www.instagram.com/grant200444/' target='_blank'><PiInstagramLogo className={styles.link} size='35px' /></a>
               <a href='https://t.me/Grant200444' target='_blank'><LiaTelegramPlane className={styles.link} size='35px' /></a>
            </div>
         </div>
      </section>
   )
};

export default Section1;
