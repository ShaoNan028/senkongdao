import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  padding: 20px;
  height: 100%;
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const MessageTabs = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  color: ${props => props.active ? '#1890ff' : '#666'};
  border-bottom: ${props => props.active ? '2px solid #1890ff' : 'none'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageItem = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #f0f2f5;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f2f5;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const MessageContent = styled.div`
  flex: 1;
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Username = styled.div`
  font-weight: bold;
`;

const MessageTime = styled.div`
  font-size: 12px;
  color: #999;
`;

const MessageText = styled.div`
  font-size: 14px;
  color: #666;
`;

const MessagePage = () => {
  const messages = [
    { id: 1, user: '系统通知', avatar: '🔔', content: '欢迎使用森空岛App！', time: '刚刚' },
    { id: 2, user: '活动小助手', avatar: '🎮', content: '新活动已经开始，快来参与吧！', time: '1小时前' },
    { id: 3, user: '明日方舟官方', avatar: '🏰', content: '新干员已上线，查看详情', time: '昨天' }
  ];

  return (
    <MessageContainer>
      <Header>消息</Header>
      <MessageTabs>
        <Tab active>通知</Tab>
        <Tab>私信</Tab>
        <Tab>评论</Tab>
      </MessageTabs>
      <MessageList>
        {messages.map(message => (
          <MessageItem key={message.id}>
            <Avatar>{message.avatar}</Avatar>
            <MessageContent>
              <MessageHeader>
                <Username>{message.user}</Username>
                <MessageTime>{message.time}</MessageTime>
              </MessageHeader>
              <MessageText>{message.content}</MessageText>
            </MessageContent>
          </MessageItem>
        ))}
      </MessageList>
    </MessageContainer>
  );
};

export default MessagePage;