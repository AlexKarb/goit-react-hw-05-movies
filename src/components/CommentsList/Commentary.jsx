import { UserIcon, Name, Item, Comment } from './CommentsList.styled';
import PropTypes from 'prop-types';

export const Commentary = ({ comment: { author, content } }) => {
  return (
    <Item>
      <Name>
        <UserIcon />
        {author}
      </Name>
      <Comment>{content}</Comment>
    </Item>
  );
};

Commentary.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
