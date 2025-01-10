import css from './Feedback.module.css';

const Feedback = ({ good = 0, neutral = 0, bad = 0, total, positive }) => {
  return (
    <ul className={css.container}>
      <li>
        <p className={css.text}>Good: {good}</p>
      </li>
      <li>
        <p className={css.text}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css.text}>Bad: {bad}</p>
      </li>
      <li>
        <p className={css.text}>Total: {total}</p>
      </li>
      <li>
        <p className={css.text}>Positive: {positive}%</p>
      </li>
    </ul>
  );
};
export default Feedback;
