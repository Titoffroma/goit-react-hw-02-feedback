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

const FeedbackList = ({ stats }) => {
  const newStats = [{statName: 'good', value: stats.good}, {statName: 'neutral', value: stats.neutral}, {statName: 'bad', value: stats.bad}];
    return (<FeedbackUl>
      {newStats.map((stat, index) => (<FeedbackItem key={index} statName={stat.statName} val={stat.value} />))}
    </FeedbackUl>)
  
}

export default FeedbackList;