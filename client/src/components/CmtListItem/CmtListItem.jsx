// Setup
import React from 'react';
import UsernameContainer from '../UsernameContainer.jsx';
import AvatarContainer from '../AvatarContainer.jsx';
import ProfilePreview from '../ProfilePreview/ProfilePreview.jsx';

import { Button, Popover, PopoverBody } from 'reactstrap';
import { CommentDiv, Lta, Xlt, FlexContainer, Lts, RedDiv } from './CmtListItemStyle.js';

// CmtListItem
class CmtListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false
    };

    this.toggle = this.toggle.bind(this);
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

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    let cmt = this.props.cmt;
    console.log(this.state.popoverOpen);

    return (
      <FlexContainer>

        <AvatarContainer cmt={cmt}/>

        <CommentDiv>
          <div>
            <UsernameContainer cmt={cmt} />
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