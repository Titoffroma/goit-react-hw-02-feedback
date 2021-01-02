import styled from 'styled-components';

const Notification = styled.span.attrs(({ message }) => ({
    children: message,
}))`
color: #212121;
` 

export default Notification;