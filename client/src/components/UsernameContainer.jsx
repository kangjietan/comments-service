import React from 'react';
import { Lta } from './CmtListItem/CmtListItemStyle.js';

const UsernameContainer = (props) => (
  <span>
    <Lta
      href={props.cmt.userData.profileURL}
      target="_blank"
    >
      {props.cmt.userData.displayName}
    </Lta>
  </span>
);

export default UsernameContainer;

/*

<Lta onMouseOver={this.onUserOrAvatarHover} href={cmt.userData.profileURL} target="_blank" >{cmt.userData.displayName}</Lta>

*/