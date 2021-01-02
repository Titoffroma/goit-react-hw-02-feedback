import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions';
import FeedbackBtn from '../FeedbackBtn';
import Statistics from '../Statistics';
import FeedbackCard from '../FeedbackCard';
import Section from '../Section';
import Notification from '../Notification';

export default class Feedback extends Component {
    state = {
     good: 0,
     neutral: 0,
     bad: 0
    }

    total = 0;

    perc = 0;

    shouldComponentUpdate(nextProps, nextState) {
        this.countTotalFeedback(nextState);
        this.countPositiveFeedbackPercentage(nextState);
        if (this.total) return true;
        return false;
    }

    handleClick = (e) => {
        if (e.target === e.currentTarget) return;
        this.setState(state => ({
            [e.target.dataset.stat]: Number(state[e.target.dataset.stat]) + 1,
        }))
    }

    countTotalFeedback(state) {
        this.total = 0;
        for (let val in state) {
            this.total += state[val];
        }
        return this.total;
    }

    countPositiveFeedbackPercentage(state) {
        this.perc = Math.round(Number((state.good / (this.total - state.neutral)) || 0) * 100);
        return `${this.perc}%`;
    }

    render() {
    return (
        <FeedbackCard>
            <Section title="Please leave a feedback">
              <FeedbackOptions onClick={this.handleClick}>
                <FeedbackBtn data-stat="good" children="Good" />
                <FeedbackBtn data-stat="neutral" children="Neutral" />
                <FeedbackBtn data-stat="bad" children="Bad"/>
              </FeedbackOptions>
            </Section>
            <Section title="Statistics">
                {this.total ?
                    <Statistics good={this.state.good} neutral={this.state.neutral}
                        bad={this.state.bad} total={this.total}
                        positivePercentage={this.perc} /> :
                    <Notification message="No feedback given"/>
                }
            </Section>
        </FeedbackCard>
      )
    }
}
