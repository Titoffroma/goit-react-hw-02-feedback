import styled from 'styled-components';

const StatValue = styled.span`
  font-weight: bold;
`
const FeedbackLi = styled.li`
  color: #212121;
  font-size: 14px;
  padding: 2px 0;
`
const FeedbackUl = styled.ul`
 list-style-type: none;
`
const FeedbackItem = ({statName, val}) => (
  <FeedbackLi>{statName}: <StatValue children={val}/></FeedbackLi>
)

const Statistics= ({ good, neutral, bad, total, positivePercentage}) => {
  return (<FeedbackUl>
    <FeedbackItem statName="Good" val={good} />
    <FeedbackItem statName="Neutral" val={neutral} />
    <FeedbackItem statName="Bad" val={bad} />
    <FeedbackItem statName="Total" val={total} />
    <FeedbackItem statName="Positive feedback" val={positivePercentage} />
    </FeedbackUl>)
  
}

export default Statistics;