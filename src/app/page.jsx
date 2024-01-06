import Image from 'next/image';
import styles from './home.module.css';
const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>My Creative Agency.</h1>
      <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, sed. Molestias laboriosam eos inventore iusto molestiae. Tenetur eveniet voluptas architecto!</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src='/brands.png' alt='brand image' fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
    <Image src='/hero.gif' alt='hero image' fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;