import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import FeedbackCard from '../FeedbackCard';
import Section from '../Section';
import Div from '../FeedbackOptions/FeedbackOptionsStyled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage(total) {
    return (
      Math.round((this.state.good / (total - this.state.neutral)) * 100) || 0
    );
  }

  handleClick = e => {
    if (e.target === e.currentTarget) return;
    this.setState(prevState => {
      return {
        [e.target.dataset.stat]: prevState[e.target.dataset.stat] + 1,
      };
    });
  };

  render() {
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage(total);
    const { good, neutral, bad } = this.state;
    return (
      <Div>
        <FeedbackCard>
          <Section title="Please leave a feedback">
            <FeedbackOptions callback={this.handleClick} />
          </Section>
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percent}
            />
          </Section>
        </FeedbackCard>
      </Div>
    );
  }
}
