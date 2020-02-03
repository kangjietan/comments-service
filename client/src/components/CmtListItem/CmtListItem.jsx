// Setup
import React from 'react';
import ProfilePreview from '../ProfilePreview/ProfilePreview.jsx';
import { RedDiv, AvatarDiv, CommentDiv, Comment, LightTextA, XLightTextSpan, Icon, FlexContainer, LightTextSpan, ProfilePreviewContainer } from './CmtListItemStyle.js';

// CmtListItem
class CmtListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Toggle if user hovers, for <ProfilePreview /> rendering
      isHovered: false
    };

    // fn bindings
    this.onUserOrAvatarHover = this.onUserOrAvatarHover.bind(this);
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

  onUserOrAvatarHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  render() {
    let cmt = this.props.cmt;
    // console.log(cmt);
    console.log(this.state.isHovered);

    return (
      <FlexContainer>

        <AvatarDiv className="valign-wrapper">
          <Icon className="responsive-img circle" src={cmt.userData.profilePicture} />
        </AvatarDiv>

        <CommentDiv>
          <RedDiv>
            <div><LightTextA onMouseOver={this.onUserOrAvatarHover} href={cmt.userData.profileURL} target="_blank" >{cmt.userData.displayName}</LightTextA><XLightTextSpan> at </XLightTextSpan><LightTextA>{this.friendlyTimestamp(cmt.timeData.timestamp)}</LightTextA><XLightTextSpan>:</XLightTextSpan><LightTextSpan>{cmt.timeData.postDate}</LightTextSpan></div>
          </RedDiv>

          <RedDiv className="">{cmt.commentBody}</RedDiv>

        </CommentDiv>
      </FlexContainer>
    );
  }
}

export default CmtListItem;