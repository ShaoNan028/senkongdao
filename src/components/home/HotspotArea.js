import React from 'react';
import styled from 'styled-components';

const HotspotContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const HotspotItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const IconPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  font-size: 20px;
  color: #1890ff;
`;

const ItemName = styled.span`
  font-size: 12px;
  color: #333;
`;

const HotspotArea = () => {
  const hotspots = [
    { id: 'signin', name: '签到福利', icon: '🎁' },
    { id: 'toolbox', name: '工具箱', icon: '🧰' },
    { id: 'activity', name: '活动战绩', icon: '🏆' }
  ];

  return (
    <HotspotContainer>
      {hotspots.map(item => (
        <HotspotItem key={item.id}>
          <IconPlaceholder>{item.icon}</IconPlaceholder>
          <ItemName>{item.name}</ItemName>
        </HotspotItem>
      ))}
    </HotspotContainer>
  );
};

export default HotspotArea;