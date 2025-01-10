import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Description from './components/Description/Description';
import { useState, useEffect } from 'react';
import Notification from './components/Notification/Notification';

function App() {
  const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [values, setValues] = useState(reviews => {
    const savedReviews = window.localStorage.getItem('saved-key');
    const parsSaved = JSON.parse(savedReviews);
    if (parsSaved !== null) {
      return parsSaved;
    }
    return reviews;
  });

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };
  useEffect(() => {
    window.localStorage.setItem('saved-key', JSON.stringify(values));
  }, [values]);
  const totalFeedback = values.good + values.neutral + values.bad;
  const resetReviews = () => {
    setValues(reviews);
  };
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options
        onUpdate={feedbackType => updateFeedback(feedbackType)}
        reviews={totalFeedback}
        onReset={resetReviews}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
