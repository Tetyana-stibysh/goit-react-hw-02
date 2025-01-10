import css from './Options.module.css';

const Options = ({ onUpdate, reviews, onReset }) => {
  return (
    <div className={css.list}>
      <button onClick={() => onUpdate('good')} className={css.button}>
        Good
      </button>

      <button onClick={() => onUpdate('neutral')} className={css.button}>
        Neutral
      </button>

      <button onClick={() => onUpdate('bad')} className={css.button}>
        Bad
      </button>
      {reviews > 0 && (
        <button onClick={onReset} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
