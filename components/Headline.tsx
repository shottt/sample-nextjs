import styles from '../styles/Home.module.css';
import { ReactNode } from 'react';

type Props = {
  page: string,
  children: ReactNode,
};

export function Headline(props: Props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
}
