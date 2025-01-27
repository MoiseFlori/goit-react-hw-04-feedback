import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';


const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setState((oldState) => ({
      ...oldState,
      [type]: oldState[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positiveFeedback = (state.good / total) * 100;
    return Math.round(positiveFeedback);
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
     <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        ) : (
            <Notification message="There is no feedback." />
        )}
  
      </Section>
    </div>
  );
};

export default App;