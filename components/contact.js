import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <footer className={styles.wrapper}>
      <h2 className={styles.h2}>
        Contact
      </h2>
      <ul className={styles.list}>
        <li class={styles.listItem}>
          <button className="font-bold">
            eduardo.omine@gmail.com
          </button>
        </li>
        <li class={styles.listItem}>
          <a href="https://linkedin.com/in/eomine" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li class={styles.listItem}>
          <a href="https://github.com/eomine" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
      <h3 className={styles.h3}>
        Timezone
      </h3>
      <p className={styles.text}>
        GMT-3 (São Paulo, Brazil)
      </p>
    </footer>
  );
}
