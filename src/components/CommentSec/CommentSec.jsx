import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import './CommentSec.scss';

const CommentSec = ({ selectedVideo }) => {
    return (
        <section className="comment-sec">
            <p className="comment-sec__count">{selectedVideo && selectedVideo.comments.length} Comments</p>
            <CommentForm />
            <ul className="comment-list">
                {selectedVideo &&
                    selectedVideo.comments.map((comment) => {
                        return (
                            <li className="comment-list__Item" key={comment.id}>
                                <Comment
                                    name={comment.name}
                                    timestamp={comment.timestamp}
                                    description={comment.comment}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default CommentSec