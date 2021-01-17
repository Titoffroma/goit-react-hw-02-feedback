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
    total: 0,
    percent: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad + 1;
  }

  countPositiveFeedbackPercentage(state, value) {
    let good = state.good;
    let neutral = state.neutral;
    if (value === 'good') good++;
    if (value === 'neutral') return state.percent;
    const dif = state.total + 1 - neutral;
    if (!dif) return 0;
    const result = (good / dif) * 100;
    return Math.round(result);
  }

  handleClick = e => {
    if (e.target === e.currentTarget) return;
    this.setState(state => {
      return {
        [e.target.dataset.stat]: Number(state[e.target.dataset.stat]) + 1,
        total: this.countTotalFeedback(),
        percent: this.countPositiveFeedbackPercentage(
          state,
          e.target.dataset.stat,
        ),
      };
    });
  };

  render() {
    return (
      <Div>
        <FeedbackCard>
          <Section title="Please leave a feedback">
            <FeedbackOptions callback={this.handleClick} />
          </Section>
          <Section title="Statistics">
            {this.state.total ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.state.total}
                positivePercentage={this.state.percent}
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
