import Comment from '../Comment/Comment';
import './CommentSec.scss';

const CommentSec = ({ videoDetails }) => {
  return (
    <div className="comment-sec">
        <p className="comment-sec__count">{videoDetails.comments.length} Comments</p>
        {
            videoDetails.comments.map((comment) => {
                return (
                    <Comment 
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