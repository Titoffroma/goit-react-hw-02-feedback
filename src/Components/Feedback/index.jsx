import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from '../Title';
import FeedbackBtnField from '../FeedbackBtnField';
import FeedbackBtn from '../FeedbackBtn';
import FeedbackList from '../FeedbackList';
import FeedbackCard from '../FeedbackCard';

export default class Feedback extends Component {
    state = {
     good: 0,
     neutral: 0,
     bad: 0
    }

    total = 0;

    perc = 0;

    handleClick = (e) => {
        if (e.target === e.currentTarget) return;
        this.setState(state => ({
            [e.target.dataset.stat]: Number(state[e.target.dataset.stat]) + 1,
        }))
    }

    countTotalFeedback() {
        this.total = 0;
        for (let val in this.state) {
            this.total += this.state[val];
        }
        return this.total;
    }

    countPositiveFeedbackPercentage() {
        this.perc = Math.round(Number((this.state.good / (this.total - this.state.neutral)) || 0) * 100);
        return `${this.perc}%`;
    }

    render() {
    return (
        <FeedbackCard>
            <Title title="Please leave a feedback" />
            <FeedbackBtnField onClick={this.handleClick}>
                <FeedbackBtn data-stat="good" children="Good" />
                <FeedbackBtn data-stat="neutral" children="Neutral" />
                <FeedbackBtn data-stat="bad" children="Bad"/>
            </FeedbackBtnField>
            <Title title="Statistics" fontSize="18"/>
            <FeedbackList stats={this.state} total={this.countTotalFeedback()} perc={this.countPositiveFeedbackPercentage()}/>
        </FeedbackCard>
      )
    }
}