import { useState } from "react";  
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import css from "./App.module.css";


export const App = () =>  {
  const [marks, setMarks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  

  const leaveFeedback = option => {
    setMarks({ ...marks, [option]: marks[option]+1})    
      
    };
  


const countTotalFeedback = () =>
  Object.values(marks).reduce((acc, curr) => acc + curr, 0);


  const countPositiveFeedbackPercentage = () => 
  Math.round( (marks.good * 100) / countTotalFeedback());
    
const total = countTotalFeedback();
const percent = countPositiveFeedbackPercentage();
const options = Object.keys(marks);
    
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
              good={marks.good}
              neutral={marks.neutral}
              bad={marks.bad}
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

  
    
    
  

