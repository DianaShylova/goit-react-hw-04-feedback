import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import css from "./App.module.css";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
     return this.state.good + this.state.neutral + this.state.bad;
};

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return positivePercentage;
  }

  render() {
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.leaveFeedback}
            options={options}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percent}
            />
          ) : (
            <Notification message="There's no feedback" />
          )}
        </Section>
      </div>
    );
  }
}; 
  
  
    
    
  

