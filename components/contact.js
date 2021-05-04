import common from '../styles/common.module.css';

export default function Contact() {
  return (
    <div className={common.box}>
      <ul className={common.text}>
        <li className={common.listItem}>
          eduardo.omine@gmail.com
        </li>
        <li className={common.listItem}>
          <a className={common.link} href="https://linkedin.com/in/eomine" target="_blank" rel="noopener noreferrer">
            LinkedIn &rarr;
          </a>
        </li>
        <li className={common.listItem}>
          <a className={common.link} href="https://github.com/eomine" target="_blank" rel="noopener noreferrer">
            GitHub &rarr;
          </a>
        </li>
      </ul>
    </div>
  );
}
