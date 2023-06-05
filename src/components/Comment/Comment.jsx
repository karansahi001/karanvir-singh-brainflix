import { dateFormat } from '../VideoInfo/VideoInfo';
import './Comment.scss';

const Comment = ({ name, timestamp, description }) => {
  return (
    <article className="comment">
      <section className="comment-left">
        <i className="comment-left__icon"></i>
      </section>
      <section className="comment-right">
        <div className="comment-right-sub">
          <p className="comment-right-sub__name">{name}</p>
          <p className="comment-right-sub__date">{dateFormat(timestamp)}</p>
        </div>
        <p className="comment-right__comment">
          {description}
        </p>
      </section>
    </article>
  )
}

export default Comment