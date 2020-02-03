import React from 'react';

class ProfilePreview extends React.Component {
  constructor(props) {
    this.state = {
      isFollowing: false
    };
  }

  render() {
    let i = this.state;
    console.log(i.isFollowing);

    return (
      <div>

        <button><i className="material-icons">person_add</i>Follow</button>

      </div>
    );
  }
}

export default ProfilePreview;