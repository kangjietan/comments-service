// Setup
import React from 'react';
import UsernameContainer from '../UsernameContainer.jsx';
import ProfilePreview from '../ProfilePreview/ProfilePreview.jsx';

import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { RedDiv, AvatarDiv, CommentDiv, Comment, LightTextA, Xlt, Icon, FlexContainer, Lts, ProfilePreviewContainer } from './CmtListItemStyle.js';

// CmtListItem
class CmtListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Toggle if user hovers, for <ProfilePreview /> rendering
      popoverOpen: false
    };

    // fn bindings
    this.toggle = this.toggle.bind(this);
    this.friendlyTimestamp = this.friendlyTimestamp.bind(this);
  }

  // Generates formatted timestamp
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
    // console.log(cmt);
    console.log(this.state.popoverOpen);

    return (
      <FlexContainer>

        <div>
          <Button id="testpop" type="button">
        test pop
          </Button>

          <Popover placement="bottom" isOpen={this.state.popoverOpen} trigger="hover" target="testpop" toggle={this.toggle}>
            <PopoverBody>
              test 123
            </PopoverBody>
          </Popover>
        </div>

        <AvatarDiv className="valign-wrapper">
          <Icon
            onMouseOver={this.TODO}
            className="responsive-img circle"
            src={cmt.userData.profilePicture}
          />
        </AvatarDiv>

        <CommentDiv>
          <RedDiv>
            <UsernameContainer handleHov={this.TODO} cmt={cmt} />
            <Xlt> at </Xlt>
            <LightTextA>{this.friendlyTimestamp(cmt.timeData.timestamp)}</LightTextA>
            <Xlt>:</Xlt>
            <Lts>{cmt.timeData.postDate}</Lts>
          </RedDiv>

          <RedDiv>{cmt.commentBody}</RedDiv>

        </CommentDiv>
      </FlexContainer>
    );
  }
}

export default CmtListItem;