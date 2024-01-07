import Image from 'next/image';
// import Image from 'next/image';

import Link from 'next/link';
import styles from './postCard.module.css';
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.pexels.com/photos/16794803/pexels-photo-16794803/free-photo-of-building-on-a-pier.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Post image"
            layout="fill"
            sizes="(max-width: 640px) 100vw, (max-width: 750px) 90vw, 600px"
          />
        </div>
        <span className={styles.date}>01.01.24</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem repudiandae eos maiores quas doloremque fugiat officia minus laborum necessitatibus quasi!</p>
        <Link className={styles.links} href="/blog/post">Read More </Link>
      </div>
    </div>
  );
};

export default PostCard;
