import classes from 'src/components/Main/Main.module.css';
import { Links } from 'src/components/Links';
import { Headline } from 'src/components/Headline';

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
