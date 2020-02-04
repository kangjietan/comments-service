import React from 'react';
import { LightTextA } from './CmtListItem/CmtListItemStyle.js';

const UsernameContainer = (props) => (
  <span>
    <LightTextA onMouseOver={props.handleHov} href={props.cmt.userData.profileURL}target="_blank">{props.cmt.userData.displayName}</LightTextA>
  </span>
);

export default UsernameContainer;

/*

<LightTextA onMouseOver={this.onUserOrAvatarHover} href={cmt.userData.profileURL} target="_blank" >{cmt.userData.displayName}</LightTextA>

*/