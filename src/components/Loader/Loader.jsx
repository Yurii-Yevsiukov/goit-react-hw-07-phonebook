import { FadeLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return <FadeLoader className={css.loader} color="green" />;
};
