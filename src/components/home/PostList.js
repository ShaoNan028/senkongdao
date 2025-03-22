import React from 'react';
import styled from 'styled-components';

const PostsContainer = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
`;

const PostCard = styled.div`
  background-color: white;
  border-radius: 12px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f0f2f5;
  margin-right: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Username = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

const UserTag = styled.div`
  display: inline-block;
  font-size: 10px;
  color: #1890ff;
  background-color: rgba(24, 144, 255, 0.1);
  padding: 1px 6px;
  border-radius: 10px;
  margin-left: 6px;
`;

const PostTime = styled.div`
  font-size: 12px;
  color: #999;
`;

const FollowButton = styled.button`
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background-color: #40a9ff;
  }
`;

const PostImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f0f2f5;
  background-image: ${props => props.image ? `url(${props.image})` : 'none'};
  background-size: cover;
  background-position: center;
`;

const PostContent = styled.div`
  padding: 12px;
`;

const PostTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #333;
`;

const PostDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const PostFooter = styled.div`
  display: flex;
  padding: 12px;
  border-top: 1px solid #f0f2f5;
`;

const ActionButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
  
  &:hover {
    color: #1890ff;
  }
`;

const ActionIcon = styled.span`
  margin-right: 4px;
  font-size: 16px;
`;

// 模拟数据 - 根据图片内容调整
const generateMockPosts = (category, subCategory) => {
  const posts = [
    {
      id: 1,
      author: '明日方舟',
      avatar: '🏰',
      tag: '官方',
      time: '2小时前',
      title: '「浊燃寂静」活动报告',
      description: 'EPISODE ASHES 历程报告',
      image: '/images/arknights-event.jpg',
      likes: 301,
      comments: 42,
      shares: 18
    },
    {
      id: 2,
      author: '森空岛小助手',
      avatar: '🤖',
      tag: '官方',
      time: '3小时前',
      title: '森空岛春日壁纸已上新，快来试用吧~',
      description: '全新壁纸上线，可爱的干员们等你来收藏！',
      image: '/images/arknights-wallpaper.jpg',
      likes: 301,
      comments: 56,
      shares: 24
    },
    {
      id: 3,
      author: '秋山清',
      avatar: '👩',
      time: '昨天',
      title: '此时无声胜有声',
      description: '分享一段游戏中的精彩瞬间...',
      image: '/images/arknights-gameplay.jpg',
      likes: 135,
      comments: 28,
      shares: 12
    }
  ];
  
  return posts;
};

const PostList = ({ category, subCategory }) => {
  const posts = generateMockPosts(category, subCategory);

  return (
    <PostsContainer>
      {posts.map(post => (
        <PostCard key={post.id}>
          <PostHeader>
            <Avatar>{post.avatar}</Avatar>
            <UserInfo>
              <div>
                <Username>{post.author}</Username>
                {post.tag && <UserTag>{post.tag}</UserTag>}
              </div>
              <PostTime>{post.time}</PostTime>
            </UserInfo>
            <FollowButton>关注</FollowButton>
          </PostHeader>
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <PostDescription>{post.description}</PostDescription>
          </PostContent>
          <PostImage image={post.image} />
          <PostFooter>
            <ActionButton>
              <ActionIcon>👍</ActionIcon>
              {post.likes}
            </ActionButton>
            <ActionButton>
              <ActionIcon>💬</ActionIcon>
              {post.comments}
            </ActionButton>
            <ActionButton>
              <ActionIcon>🔄</ActionIcon>
              {post.shares}
            </ActionButton>
          </PostFooter>
        </PostCard>
      ))}
    </PostsContainer>
  );
};

export default PostList;