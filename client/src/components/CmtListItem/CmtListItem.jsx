// Setup
import React from 'react';
import { RedDiv, Comment, LightTextA, XLightTextSpan, Icon } from './CmtListItemStyle.js';

// CmtListItem
class CmtListItem extends React.Component {
  constructor(props) {
    super(props);

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

  render() {
    let cmt = this.props.cmt;

    return (
      <Comment>
        <RedDiv className="col s1 valign-wrapper">
          <Icon className="responsive-img circle" src={cmt.userData.profilePicture} />
        </RedDiv>
        <div className="row">
          <RedDiv className="col s3">
            <LightTextA href={cmt.userData.profileURL} target="_blank" >{cmt.userData.displayName}</LightTextA><XLightTextSpan> at </XLightTextSpan><LightTextA>{this.friendlyTimestamp(cmt.timeData.timestamp)}</LightTextA><XLightTextSpan>:</XLightTextSpan>
          </RedDiv><RedDiv className="col s9">placeholder</RedDiv>

          <RedDiv className="offset s1">{cmt.commentBody}</RedDiv>

        </div>
      </Comment>
    );
  }
}

export default CmtListItem;