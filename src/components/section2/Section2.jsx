import styles from './Section2.module.css';
import face from './images/face.jpg'

function Section2() {
   return (
      <section className={styles.section}>
         <div className={styles.container}>
            <img src={face} alt='face' width='256px' />
            <div className={styles.about}>
               <h1>A B O U T&nbsp; &nbsp;M E</h1>
               <p>Welcome to my world of visual storytelling! I'm  a passionate photographer dedicated to capturing the beauty, emotions, and stories that unfold through the lens of my camera. From a young age, I found solace in the art of photography. It's more than just a profession; it's my way of expressing the world as I see it. Each click of the shutter allows me to freeze a moment in time, preserving the magic of life's fleeting moments.</p>
            </div>
         </div>
      </section>
   )
};

export default Section2;