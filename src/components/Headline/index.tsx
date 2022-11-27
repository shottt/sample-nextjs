import classes from 'src/components/Headline/Headline.module.css';
import { ReactNode } from 'react';

type Props = {
  page: string,
  children: ReactNode,
};

export function Headline(props: Props) {
  return (
    <div>
      <h1 className={classes.title}>{props.page} Page</h1>

      <p className={classes.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
}
