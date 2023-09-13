import './directory-item.styles';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  NavLink,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <NavLink to={`shop/${title}`}>
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </NavLink>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
