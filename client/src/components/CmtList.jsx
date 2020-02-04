// Setup
import React from 'react';
import styled from 'styled-components';

import CmtListItem from './CmtListItem/CmtListItem.jsx';
import { CommentDiv } from './CmtListItem/CmtListItemStyle.js';

const axios = require('axios');

const TotalCmts = styled.div`
  color: #999;
  margin-bottom: 10px;
  border-bottom: 1px solid #d1d1d1;
`;

// Identify content containers for or infinite scroll
const CmtContainer = styled.div`
`;

class CmtList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      totalComments: null,
      blockFirstRender: false
    };

    this.getComments = this.getComments.bind(this);
    this.calcTotalComments = this.calcTotalComments.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    axios.get('/api/comments')
      .then((res) => {
        this.setState({
          comments: res.data[0].comments
        });
        this.calcTotalComments(res.data);
      });
  }

  calcTotalComments(res) {
    this.setState({
      totalComments: res[0].comments.length
    });
  }

  render () {
    console.log('lifecycle from CmtList intiated!');
    return (
      <div>
        <TotalCmts>
          <span><i className="tiny material-icons" id="cmt-i" >chat_bubble</i> {this.state.totalComments} comments</span>
        </TotalCmts>

        <CommentDiv>
          {this.state.comments.map((el, idx) => {
            return <CmtListItem cmt={el} key={idx} aid={`A${idx}`} uid={`U${idx}`} />;
          })}
        </CommentDiv>
      </div>
    );
  }
}

export default CmtList;