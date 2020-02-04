import React from 'react';
import { Lta } from './CmtListItem/CmtListItemStyle.js';
import { Button, Popover, PopoverBody } from 'reactstrap';

class UsernameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    let props = this.props;

    return (
      <span>
        {/* <Button id={props.uid}/> */}
        <Lta
          href={props.cmt.userData.profileURL}
          target="_blank"
        >
          {props.cmt.userData.displayName}
        </Lta>

        {/* <Popover
          placement="bottom"
          trigger="hover"
          target={props.aid}
          isOpen={this.state.popoverOpen}
          toggle={props.toggle}>
          <PopoverBody>Hello World!</PopoverBody>
        </Popover> */}

      </span>
    );
  }
}

export default UsernameContainer;

/*

<Lta onMouseOver={this.onUserOrAvatarHover} href={cmt.userData.profileURL} target="_blank" >{cmt.userData.displayName}</Lta>

*/