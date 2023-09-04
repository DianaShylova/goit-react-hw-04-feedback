import { useState } from "react";  
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import css from "./App.module.css";


export const App = () =>  {
  const [app, setApp] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  

  const leaveFeedback = option => {
    setApp(prevState => ({ ...prevState, [option]: prevState[option] + 1, }));    
      
    };
  


  const countTotalFeedback = () => {

    return Object.values(app).reduce((acc, curr) => acc + curr, 0);
  }


  const countPositiveFeedbackPercentage = () => {
    
    const { good } = app;
    return Math.round( (good * 100) / countTotalFeedback());

  }
  
    
const total = countTotalFeedback();
const percent = countPositiveFeedbackPercentage();
const options = Object.keys(app);
    
return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={leaveFeedback}
            options={options}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={app.good}
              neutral={app.neutral}
              bad={app.bad}
              total={total}
              positivePercentage={percent}
            />
          ) : (
            <Notification message="There's no feedback" />
          )}
        </Section>
      </div>
  );
}; 

  
    
    
  

