import common from '../styles/common.module.css';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={common.box}>
      <span className={styles.footer}>
        Built with &thinsp;
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
        &thinsp; and &thinsp;
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>
      </span>
    </footer>
  );
}
