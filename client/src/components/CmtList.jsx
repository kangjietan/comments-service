// Setup
import React from 'react';
import CmtListItem from './CmtListItem/CmtListItem.jsx';
import styled from 'styled-components';
const axios = require('axios');

const TotalCmts = styled.div`
  color: #999;
  padding: 0px 0px 7px 0px;
  border-bottom: 1px solid #d1d1d1;
`;

class CmtList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      totalComments: null
    };

    this.getComments = this.getComments.bind(this);
    this.calcTotalComments = this.calcTotalComments.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  // Get all comments for song (bugfix on Trello)
  getComments() {
    axios.get('/api/comments')
      .then((res) => {
        this.setState({
          comments: res.data[0].comments
        });
        this.calcTotalComments(res.data);
      });
  }

  // Calculate total comments
  calcTotalComments(res) {
    this.setState({
      totalComments: res[0].comments.length
    });
  }

  render () {
    return (
      <div>
        <TotalCmts>
          <span><i className="tiny material-icons" id="cmt-i" >chat_bubble</i> {this.state.totalComments} comments</span>
        </TotalCmts>

        <div>
          {this.state.comments.map((el, idx) => {
            return <CmtListItem cmt={el} key={idx} />;
          })}
        </div>
      </div>
    );
  }
}

export default CmtList;