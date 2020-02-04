import styled from 'styled-components';

export const RedDiv = styled.div`
  border: solid 1px red;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-flow: row no-wrap;
  align-items: center;
  margin-bottom: 12px;
`;

export const CommentDiv = styled.div`
  align-self: flex-start;
  flex-grow: 1;
`;

export const Lta = styled.span`
  color: #999;
  cursor: pointer;
  font-size: 12px;
  &:hover {
      color: #333;
      text-decoration: none;
    }
`;

export const Lts = styled.span`
  color: #999;
  font-size: 12px;
  padding-right: 7px;
  float: right;
`;

export const Xlt = styled.span`
  color: #ccc;
  font-size: 11px;
`;