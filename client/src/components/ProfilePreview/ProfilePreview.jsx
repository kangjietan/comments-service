import React from 'react';
import { ProfileContainer, FollowButton } from './ProfilePreview.js';
import { Button, Popover, PopoverBody } from 'reactstrap';

class ProfilePreview extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    return (
      <div>
        <Popover placement="bottom" trigger="hover" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </div>
    );
  }
}

/*
TAG ON THE PROFILE PREVIEW:

<Button id="Popover1" type="button">
  Launch Popover Button
</Button>


*/

export default ProfilePreview;