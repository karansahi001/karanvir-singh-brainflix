import { Link } from 'react-router-dom';
import './VideoCard.scss';

const VideoCard = ({ id, image, title, name }) => {

  return (
    <Link className="video-link" to={`/${id}`}>
      <article className="next-video">
        <div className="next-left">
          <img src={image} alt={title} className="next-left__image" />
        </div>
        <div className="next-right">
          <p className="next-right__title">
            {title}
          </p>
          <p className="next-right__name">{name}</p>
        </div>
      </article>
    </Link>
  )
}

export default VideoCard