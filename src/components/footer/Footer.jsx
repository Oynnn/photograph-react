import styles from './Footer.module.css';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { LiaTelegramPlane } from 'react-icons/lia';

function Footer() {
   return (
      <footer className={styles.footer}>
         <span>Created by Onik Baghdasaryan</span>
         <div className={styles.links}>
            <a href='https://www.linkedin.com/in/%D6%85%D5%B6%D5%AB%D5%AF-%D5%A2%D5%A1%D5%B2%D5%A4%D5%A1%D5%BD%D5%A1%D6%80%D5%B5%D5%A1%D5%B6-60a396277/' target='_blank'><CiLinkedin className={styles.link} size='35px' color='white' /></a>
            <a href='https://github.com/Oynnn' target='_blank'><FaGithub className={styles.link} size='35px' color='white' /></a>
            <a href='https://t.me/OnikBaghdasaryan' target='_blank'><LiaTelegramPlane className={styles.link} size='35px' color='white' /></a>
         </div>
      </footer>
   )
};

export default Footer;