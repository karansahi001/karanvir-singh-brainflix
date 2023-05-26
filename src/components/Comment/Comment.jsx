import './Comment.scss';
import { dateFormat } from '../VideoInfo/VideoInfo';

const Comment = ({ name, timestamp, description }) => {
    return (
        <article className="comment">
            <div className="comment-left">
                <i className="comment-left__icon"></i>
            </div>
            <div className="comment-right">
                <div className="comment-right-sub">
                    <p className="comment-right-sub__name">{name}</p>
                    <p className="comment-right-sub__date">{dateFormat(timestamp)}</p>
                </div>
                <p className="comment-right__comment">
                    {description}
                </p>
            </div>
        </article>
    )
}

export default Comment