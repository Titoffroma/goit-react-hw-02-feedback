import styled from 'styled-components';
import PropTypes from 'prop-types';

const Notification = styled.span.attrs(({ message }) => ({
  children: message,
}))`
  color: #212121;
`;

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
