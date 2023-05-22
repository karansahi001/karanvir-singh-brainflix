import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import './CommentSec.scss';

const CommentSec = ({ selectedVideo }) => {
  return (
    <div className="comment-sec">
        <p className="comment-sec__count">{selectedVideo.comments.length} Comments</p>
        <CommentForm />
        {
            selectedVideo.comments.map((comment) => {
                return (
                    <Comment 
                        key={ comment.id }
                        name={ comment.name } 
                        timestamp={ comment.timestamp } 
                        description={ comment.comment } 
                    />
                )
            })
        }
    </div>
  )
}

export default CommentSec