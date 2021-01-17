import FeedbackBtn from '../FeedbackBtn/FeedbackBtnStyled';
import PropTypes from 'prop-types';
import Div from './FeedbackOptionsStyled';

const FeedbackOptions = ({ callback }) => (
  <Div onClick={callback}>
    <FeedbackBtn data-stat="good">Good</FeedbackBtn>
    <FeedbackBtn data-stat="neutral">Neutral</FeedbackBtn>
    <FeedbackBtn data-stat="bad">Bad</FeedbackBtn>
  </Div>
);

FeedbackOptions.propTypes = {
  callback: PropTypes.func,
};

export default FeedbackOptions;
