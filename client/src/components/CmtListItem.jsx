// Setup
import React from 'react';
import styled from 'styled-components';

// Styled components
const C = styled.div`
  ${'' /* border: 1px solid red; */}
`;

const Comment = styled.div`
  position: relative;
  padding: 10px 10px 10px 0;
`;

const LightTextA = styled.a`
  color: #999;
  cursor: pointer;
  font-size: 12px;
`;

const XLightTextSpan = styled.span`
  color: #ccc;
  font-size: 11px;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
`;

// CmtListItem
class CmtListItem extends React.Component {
  constructor(props) {
    super(props);

    this.friendlyTimestamp = this.friendlyTimestamp.bind(this);
  }

  // Generates formatted timestamp from integer
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
    console.log(cmt);

    // let eg = {
    //   border: '1px solid green',
    //   padding: '10px',
    //   marginBottom: '20px'
    // };

    return (
      <Comment className="epic">
        <C className="col s1 valign-wrapper">
          <Icon className="responsive-img circle" src={cmt.userData.profilePicture} />
        </C>
        <div className="row">
          <C className="col s3">
            <LightTextA href={cmt.userData.profileURL} target="_blank" >{cmt.userData.displayName}</LightTextA><XLightTextSpan> at </XLightTextSpan><LightTextA>{this.friendlyTimestamp(cmt.timeData.timestamp)}</LightTextA><XLightTextSpan>:</XLightTextSpan>
          </C><C className="col s9">placeholder</C>

          <C className="offset s1">{cmt.commentBody}</C>

        </div>
      </Comment>
    );
  }
}

export default CmtListItem;