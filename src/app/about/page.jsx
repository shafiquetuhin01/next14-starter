import Image from 'next/image';
import styles from './about.module.css';
const aboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About My Agency</h2>
        <h1 className={styles.title}>Hi! I am crating a digital agency, awesome!!!</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non incidunt est maxime ab ut dolore officia quae sequi reprehenderit at minima fuga, iure odio praesentium beatae? Dolores cupiditate quod consectetur dolore corrupti cumque assumenda qui veniam facere veritatis. Unde ducimus repellendus exercitationem natus ad at excepturi. Voluptate ipsum consectetur dicta?</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>20K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>20K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>20K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
      <Image className={styles.img} src="/about.png" alt="" fill/>
      </div>
    </div> 
  )
}

export default aboutPage