import React from 'react';
import styled from 'styled-components';

const FollowContainer = styled.div`
  padding: 20px;
  height: 100%;
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
  text-align: center;
`;

const EmptyIcon = styled.div`
  font-size: 60px;
  margin-bottom: 20px;
`;

const EmptyText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const ExploreButton = styled.button`
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #40a9ff;
  }
`;

const FollowPage = () => {
  return (
    <FollowContainer>
      <Header>关注</Header>
      <EmptyState>
        <EmptyIcon>👀</EmptyIcon>
        <EmptyText>你还没有关注任何人<br />关注感兴趣的创作者，获取第一手作品更新</EmptyText>
        <ExploreButton>去探索</ExploreButton>
      </EmptyState>
    </FollowContainer>
  );
};

export default FollowPage;