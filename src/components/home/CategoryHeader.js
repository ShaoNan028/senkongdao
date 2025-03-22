import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease;
  height: ${props => props.isCompact ? '60px' : '120px'};
  background-image: ${props => `url(/images/${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, ${props => props.isCompact ? 0.7 : 0.3});
  transition: all 0.3s ease;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  position: relative;
  z-index: 2;
`;

const CategoryTitle = styled.h1`
  color: white;
  margin: 0;
  font-size: ${props => props.isCompact ? '18px' : '20px'};
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;
`;

const SearchIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  margin-left: auto;
`;

const CategoryTabs = styled.div`
  display: ${props => props.isCompact ? 'none' : 'flex'};
  overflow-x: auto;
  padding: 0 10px;
  margin-top: auto;
  position: relative;
  z-index: 2;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryTab = styled.div`
  color: white;
  padding: 8px 15px;
  margin: 0 5px;
  border-radius: 20px;
  background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.3)' : 'transparent'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  cursor: pointer;
  white-space: nowrap;
`;

const CategoryHeader = ({ categories, activeCategory, setActiveCategory, isCompact }) => {
  return (
    <HeaderContainer backgroundImage={activeCategory.backgroundImage} isCompact={isCompact}>
      <HeaderOverlay isCompact={isCompact} />
      <NavBar>
        <CategoryTitle isCompact={isCompact}>
          {isCompact ? activeCategory.name : '森空岛'}
        </CategoryTitle>
        <SearchIcon>🔍</SearchIcon>
      </NavBar>
      <CategoryTabs isCompact={isCompact}>
        {categories.map(category => (
          <CategoryTab 
            key={category.id}
            active={category.id === activeCategory.id}
            onClick={() => setActiveCategory(category)}
          >
            {category.name}
          </CategoryTab>
        ))}
      </CategoryTabs>
    </HeaderContainer>
  );
};

export default CategoryHeader;