import Image from 'next/image';
import styles from './about.module.css';
const aboutPage = () => {
  return (
    <div>aboutPage
      <div className={styles.imgcontainer}>
      <Image src="/about.png" alt="" fill/>
      </div>
    </div> 
  )
}

export default aboutPage