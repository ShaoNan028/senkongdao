import React, { forwardRef } from 'react';
import styled from 'styled-components';

const TabsWrapper = styled.div`
  position: relative;
  height: ${props => props.height}px;
  margin-bottom: 10px;
`;

const TabsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  background-color: white;
  padding: 10px 0;
  position: ${props => props.isSticky ? 'fixed' : 'relative'};
  top: ${props => props.isSticky ? '60px' : 'auto'};
  left: 0;
  right: 0;
  z-index: 5;
  box-shadow: ${props => props.isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: box-shadow 0.2s ease;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.div`
  padding: 8px 15px;
  margin: 0 5px;
  white-space: nowrap;
  color: ${props => props.active ? '#1890ff' : '#666'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  border-bottom: ${props => props.active ? '2px solid #1890ff' : 'none'};
  cursor: pointer;
  font-size: 14px;
`;

const SubCategoryTabs = forwardRef(({ subCategories, activeSubCategory, setActiveSubCategory, isSticky, height = 44 }, ref) => {
  return (
    <TabsWrapper ref={ref} height={height}>
      <TabsContainer isSticky={isSticky}>
        {subCategories.map((subCategory, index) => (
          <Tab 
            key={index}
            active={index === activeSubCategory}
            onClick={() => setActiveSubCategory(index)}
          >
            {subCategory}
          </Tab>
        ))}
      </TabsContainer>
    </TabsWrapper>
  );
});

export default SubCategoryTabs;