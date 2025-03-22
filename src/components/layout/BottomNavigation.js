import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #eee;
  position: sticky;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.05);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.active ? '#1890ff' : '#999'};
  font-size: 12px;
  cursor: pointer;
`;

const IconPlaceholder = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: '首页', path: '/', icon: '🏠' },
    { name: '关注', path: '/follow', icon: '👀' },
    { name: '消息', path: '/message', icon: '💬' },
    { name: '我的', path: '/profile', icon: '👤' }
  ];

  return (
    <NavContainer>
      {navItems.map(item => (
        <NavItem 
          key={item.path} 
          active={location.pathname === item.path}
          onClick={() => navigate(item.path)}
        >
          <IconPlaceholder>{item.icon}</IconPlaceholder>
          {item.name}
        </NavItem>
      ))}
    </NavContainer>
  );
};

export default BottomNavigation;