import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import FeedbackCard from '../FeedbackCard';
import Section from '../Section';
import Notification from '../Notification';
import Div from '../FeedbackOptions/FeedbackOptionsStyled';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage(total) {
    return Math.round((this.state.good / (total - this.state.neutral)) * 100);
  }

  handleClick = e => {
    if (e.target === e.currentTarget) return;
    this.setState(state => {
      return {
        [e.target.dataset.stat]: Number(state[e.target.dataset.stat]) + 1,
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
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={percent}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Section>
        </FeedbackCard>
      </Div>
    );
  }
}
