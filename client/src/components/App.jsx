import React from 'react';
import CmtList from './CmtList.jsx';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding-top: 40px;
  font: 12px/1.4 'Lucida Grande';
  color: #333;
`;

const App = () => {
  return (
    <AppContainer>
      <CmtList id="CmtList"/>
    </AppContainer>
  );
};

export default App;