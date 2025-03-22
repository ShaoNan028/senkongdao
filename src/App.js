import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import BottomNavigation from './components/layout/BottomNavigation';
import HomePage from './components/home/HomePage';
import FollowPage from './components/follow/FollowPage';
import MessagePage from './components/message/MessagePage';
import ProfilePage from './components/profile/ProfilePage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <ContentContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/follow" element={<FollowPage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </ContentContainer>
        <BottomNavigation />
      </AppContainer>
    </Router>
  );
}

export default App;
