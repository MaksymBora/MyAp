import { StyledSidebarWrapper, StyledItem, StyledLink } from './Sidebar.styled';
import { SidebarData } from 'data/SidebarData';

const Sidebar = () => {
  return (
    <StyledSidebarWrapper>
      <ul>
        {SidebarData.map((element, key) => {
          const { icon, title, link } = element;
          return (
            <StyledItem key={key}>
              <StyledLink to={link}>
                {icon}
                {title}
              </StyledLink>
            </StyledItem>
          );
        })}
      </ul>
    </StyledSidebarWrapper>
  );
};

export default Sidebar;
