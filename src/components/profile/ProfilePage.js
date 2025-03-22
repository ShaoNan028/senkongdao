import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  height: 100%;
`;

const ProfileHeader = styled.div`
  background-color: #1890ff;
  color: white;
  padding: 30px 20px;
  position: relative;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;

const UserDetails = styled.div`
  flex: 1;
`;

const Username = styled.h2`
  margin: 0 0 5px 0;
  font-size: 20px;
`;

const UserID = styled.div`
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 10px;
`;

const EditProfileButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  background-color: white;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
`;

const StatItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: ${props => props.last ? 'none' : '1px solid #eee'};
`;

const StatValue = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
`;

const MenuContainer = styled.div`
  background-color: white;
  margin: 10px 0;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f0f2f5;
  cursor: pointer;
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const MenuIcon = styled.div`
  font-size: 20px;
  margin-right: 15px;
  width: 24px;
  text-align: center;
`;

const MenuText = styled.div`
  flex: 1;
  font-size: 16px;
`;

const MenuArrow = styled.div`
  font-size: 16px;
  color: #ccc;
`;

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <UserInfo>
          <Avatar>👤</Avatar>
          <UserDetails>
            <Username>森空岛用户</Username>
            <UserID>ID: 12345678</UserID>
            <EditProfileButton>编辑资料</EditProfileButton>
          </UserDetails>
        </UserInfo>
      </ProfileHeader>
      
      <StatsContainer>
        <StatItem>
          <StatValue>0</StatValue>
          <StatLabel>关注</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>0</StatValue>
          <StatLabel>粉丝</StatLabel>
        </StatItem>
        <StatItem last>
          <StatValue>0</StatValue>
          <StatLabel>获赞</StatLabel>
        </StatItem>
      </StatsContainer>
      
      <MenuContainer>
        <MenuItem>
          <MenuIcon>📱</MenuIcon>
          <MenuText>我的作品</MenuText>
          <MenuArrow>›</MenuArrow>
        </MenuItem>
        <MenuItem>
          <MenuIcon>❤️</MenuIcon>
          <MenuText>我的收藏</MenuText>
          <MenuArrow>›</MenuArrow>
        </MenuItem>
        <MenuItem>
          <MenuIcon>📋</MenuIcon>
          <MenuText>浏览历史</MenuText>
          <MenuArrow>›</MenuArrow>
        </MenuItem>
      </MenuContainer>
      
      <MenuContainer>
        <MenuItem>
          <MenuIcon>⚙️</MenuIcon>
          <MenuText>设置</MenuText>
          <MenuArrow>›</MenuArrow>
        </MenuItem>
        <MenuItem>
          <MenuIcon>🔔</MenuIcon>
          <MenuText>通知中心</MenuText>
          <MenuArrow>›</MenuArrow>
        </MenuItem>
        <MenuItem>
          <MenuIcon>💬</MenuIcon>
          <MenuText>意见反馈</MenuText>
          <MenuArrow>›</MenuArrow>
        </MenuItem>
        <MenuItem>
          <MenuIcon>❓</MenuIcon>
          <MenuText>帮助中心</MenuText>
          <MenuArrow>›</MenuArrow>
        </MenuItem>
      </MenuContainer>
    </ProfileContainer>
  );
};

export default ProfilePage;