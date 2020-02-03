import React from 'react';
import Popover from 'react-bootstrap/Popover';
import { ProfileContainer, FollowButton } from './ProfilePreview.js';

class ProfilePreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFollowing: false
    };
  }

  render() {
    let i = this.state;
    console.log(i.isFollowing);

    return (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        </Popover.Content>
      </Popover>
    );
  }
}

/*

      <div type="div" className="btn btn-secondary" data-trigger="hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="hello this be a test or sum!">
        Popover
      </div>


<ProfileContainer className="card-panel teal">
        <div>hello</div>
        <button><i className="material-icons">person_add</i>Follow</button>
      </ProfileContainer>

*/

export default ProfilePreview;