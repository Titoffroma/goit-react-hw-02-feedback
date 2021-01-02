// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1.attrs(props => ({
    children: props.title || '',
}))`
 color: #212121;
 font-size: ${props => props.fontSize || 22}px;
 font-weight: bold;
`
export default Title;