import classes from './Main.module.css';
import { Links } from './Links';
import { Headline } from './Headline';

type Props = {
  page: string,
};

export function Main(props: Props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
}
