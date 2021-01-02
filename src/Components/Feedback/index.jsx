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

    handleClick = (e) => {
        this.setState(state => ({
            [e.target.dataset.stat]: Number(state[e.target.dataset.stat]) + 1,
        }))
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
            <FeedbackList stats={this.state}/>
        </FeedbackCard>
      )
    }
}