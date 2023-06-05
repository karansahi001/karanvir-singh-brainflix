import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'
import './VideoInfo.scss'

export const dateFormat = (timestamp) => {
  const date = new Date(timestamp);
  return (
    `${((date.getMonth() + 1) < 10
      ? `0${date.getMonth() + 1}`
      : (date.getMonth() + 1))}/${(date.getDate() < 10
        ? `0${date.getDate()}`
        : date.getDate())}/${date.getFullYear()}`
  )
}

const VideoInfo = ({ selectedVideo }) => {

  return (
    <section className="v-info">
      <h1 className="v-info__head">{selectedVideo && selectedVideo.title}</h1>
      <hr className="v-info__divider mobile-divider" />
      <div className="v-container">
        <div className="vcontain">
          <p className="vcontain__by">By {selectedVideo && selectedVideo.channel}</p>
          <p className="vcontain__date">{dateFormat(selectedVideo && selectedVideo.timestamp)}</p>
        </div>
        <div className="vcontain">
          <p className="vcontain__views">
            <img className="vcontain__icons" src={viewsIcon} alt="views eye icon" />
            {selectedVideo && selectedVideo.views}
          </p>
          <p className="vcontain__likes">
            <img className="vcontain__icons" src={likesIcon} alt="likes heart icon" />
            {selectedVideo && selectedVideo.likes}
          </p>
        </div>
      </div>
      <hr className="v-info__divider" />
      <p className="v-info__desc"> {selectedVideo && selectedVideo.description} </p>
    </section>
  )
}

export default VideoInfo