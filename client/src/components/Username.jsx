import React from 'react';
import { LightTextA } from './CmtListItem/CmtListItemStyle.js';

const Username = (props) => {
  return (
    <span>
      <LightTextA onMouseOver={props.handleHov} href={props.cmt.userData.profileURL}target="_blank">{props.cmt.userData.displayName}</LightTextA>
    </span>
  );
};

export default Username;

/*

<LightTextA onMouseOver={this.onUserOrAvatarHover} href={cmt.userData.profileURL} target="_blank" >{cmt.userData.displayName}</LightTextA>

*/