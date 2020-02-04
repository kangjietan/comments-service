// Setup
import React from 'react';
import UsernameContainer from '../UsernameContainer.jsx';
import AvatarContainer from '../AvatarContainer.jsx';

import { CommentDiv, Lta, Xlt, FlexContainer, Lts, RedDiv } from './CmtListItemStyle.js';

// CmtListItem
class CmtListItem extends React.Component {
  constructor(props) {
    super(props);

    this.friendlyTimestamp = this.friendlyTimestamp.bind(this);
  }

  friendlyTimestamp (timestamp) {
    let min = 0;
    let sec = 0;

    while (timestamp > 60) {
      min += 1;
      timestamp = timestamp - 60;
    }
    timestamp < 10 ? sec = '0' + timestamp.toString() : sec = timestamp;

    return `${min}:${sec}`;
  }

  render() {
    // FUV
    let props = this.props;
    let cmt = this.props.cmt;
    console.log(props.uid, props.aid, typeof props.uid);

    return (
      <FlexContainer>

        <AvatarContainer aid={props.aid} cmt={cmt}/><span></span>

        <CommentDiv>

          <div>
            <UsernameContainer uid={props.uid} cmt={cmt} />
            <Xlt> at </Xlt>
            <Lta>{this.friendlyTimestamp(cmt.timeData.timestamp)}</Lta>
            <Xlt>:</Xlt>
            <Lts>{cmt.timeData.postDate}</Lts>
          </div>

          <div>{cmt.commentBody}</div>

        </CommentDiv>
      </FlexContainer>
    );
  }
}

export default CmtListItem;