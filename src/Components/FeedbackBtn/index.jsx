import styled from 'styled-components';

const FeedbackBtn = styled.button`
 background: white;
 color: #717171;
 font-size: 12px;
 font-weight: bold;
 padding: 4px 10px;
 border: 1px solid #212121;
 border-radius: 4px;
 box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
 &:hover {
     color: #212121;
 }
 &:focus {
     outline: none;
     border: 1px solid #212121;
 }
 &:active {
     box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
 }
 &:not(:last-child) {
     margin-right: 8px;
 }
`
export default FeedbackBtn;