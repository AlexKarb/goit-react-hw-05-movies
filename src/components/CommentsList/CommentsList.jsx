import { Commentary } from './Commentary';

export const CommentList = ({ comments }) =>
  comments.length === 0 ? (
    <div>Комментарии не найдены</div>
  ) : (
    <ul>
      {comments.map(comment => (
        <Commentary key={comment.id} comment={comment} />
      ))}
    </ul>
  );
