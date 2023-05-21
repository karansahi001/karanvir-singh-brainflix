import './VideoCard.scss';

const VideoCard = ({ image, title, name }) => {
  return (
    <article className="next-video">
        <div className="next-left">
            <img src={ image } alt={ title } className="next-left__image" />
        </div>
        <div className="next-right">
            <p className="next-right__title">
                { title }
            </p>
            <p className="next-right__name">{ name }</p>
        </div>
    </article>
  )
}

export default VideoCard