import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CategoryHeader from './CategoryHeader';
import HotspotArea from './HotspotArea';
import SubCategoryTabs from './SubCategoryTabs';
import PostList from './PostList';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

// 更新分类数据以匹配图片
const categories = [
  { id: 'recommended', name: '推荐', backgroundImage: 'recommended-bg.jpg' },
  { id: 'arknights', name: '明日方舟', backgroundImage: 'arknights-bg.jpg' },
  { id: 'stardust', name: '来自星尘', backgroundImage: 'stardust-bg.jpg' },
  { id: 'endfield', name: '终末地', backgroundImage: 'endfield-bg.jpg' }
];

const subCategories = {
  recommended: ['热门', '最新', '关注', '附近'],
  arknights: ['热门', '攻略', '同人', '漫画', '视频', '讨论'],
  stardust: ['新闻', '攻略', '同人', '讨论'],
  endfield: ['新闻', '攻略', '同人', '讨论']
};

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const [isTabSticky, setIsTabSticky] = useState(false);
  const [tabHeight, setTabHeight] = useState(44); // 添加标签高度状态
  const containerRef = useRef(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    // 获取标签实际高度
    if (tabsRef.current) {
      setTabHeight(tabsRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const scrollPosition = containerRef.current.scrollTop;
            
            // 只有当滚动位置变化超过一定阈值时才更新状态
            if (Math.abs(scrollPosition - lastScrollY) > 5) {
              setIsHeaderCompact(scrollPosition > 60);
              
              if (tabsRef.current) {
                const tabsPosition = tabsRef.current.offsetTop;
                const shouldBeSticky = scrollPosition > tabsPosition - 60;
                
                if (isTabSticky !== shouldBeSticky) {
                  setIsTabSticky(shouldBeSticky);
                }
              }
              
              lastScrollY = scrollPosition;
            }
            
            ticking = false;
          }
        });
        
        ticking = true;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isTabSticky]);

  return (
    <HomeContainer>
      <ContentWrapper ref={containerRef}>
        <CategoryHeader 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
          isCompact={isHeaderCompact}
        />
        <HotspotArea />
        <SubCategoryTabs 
          ref={tabsRef}
          subCategories={subCategories[activeCategory.id]} 
          activeSubCategory={activeSubCategory}
          setActiveSubCategory={setActiveSubCategory}
          isSticky={isTabSticky}
          height={tabHeight}
        />
        <PostList category={activeCategory.id} subCategory={activeSubCategory} />
      </ContentWrapper>
    </HomeContainer>
  );
};

export default HomePage;