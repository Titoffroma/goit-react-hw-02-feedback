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

const FeedbackList = ({ stats, total, perc }) => {
  const newStats = [{ statName: 'Good', value: stats.good },
    { statName: 'Neutral', value: stats.neutral },
    { statName: 'Bad', value: stats.bad },
    { statName: 'Total', value: total },
  { statName: 'Positive feedback', value: perc }];
    return (<FeedbackUl>
      {newStats.map((stat, index) => (<FeedbackItem key={index} statName={stat.statName} val={stat.value} />))}
    </FeedbackUl>)
  
}

export default FeedbackList;