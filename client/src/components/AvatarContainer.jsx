import React from 'react';
import styled from 'styled-components';

const AvatarDiv = styled.div`
  padding-top: 4px;
  align-self: flex-start;
  flex: 0 0 45px;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
`;

const AvatarContainer = (props) => (
  <AvatarDiv className="valign-wrapper">
    <Icon
      className="responsive-img circle"
      src={props.cmt.userData.profilePicture}
    />
  </AvatarDiv>
);

export default AvatarContainer;