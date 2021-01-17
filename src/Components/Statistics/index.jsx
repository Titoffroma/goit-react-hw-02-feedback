import PropTypes from 'prop-types';
import { StatValue, FeedbackLi, FeedbackUl } from './StatisticsStyled';

const FeedbackItem = ({ statName, val }) => (
  <FeedbackLi>
    {statName}: <StatValue>{val}</StatValue>
  </FeedbackLi>
);

FeedbackItem.propTypes = {
  statName: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
};

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <FeedbackUl>
      <FeedbackItem statName="Good" val={`${good}`} />
      <FeedbackItem statName="Neutral" val={`${neutral}`} />
      <FeedbackItem statName="Bad" val={`${bad}`} />
      <FeedbackItem statName="Total" val={`${total}`} />
      <FeedbackItem
        statName="Positive feedback"
        val={`${positivePercentage} %`}
      />
    </FeedbackUl>
  );
};

export default Statistics;
