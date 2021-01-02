import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1.attrs(({title}) => ({
    children: title || '',
}))`
 color: #212121;
 font-size: ${props => props.fontSize || 22}px;
 font-weight: bold;
`
Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title;