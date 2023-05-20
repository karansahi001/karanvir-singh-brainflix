import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'
import './VideoInfo.scss'


const VideoInfo = ({ videoDetails }) => {

    const date = new Date(videoDetails.timestamp);
    const dateFormat = `${((date.getMonth()+1) < 10 ? `0${date.getMonth()+1}`: (date.getMonth()+1))}/${(date.getDate() < 10 ? `0${date.getDate()}`: date.getDate())}/${date.getFullYear()}`

  return (
    <section className="v-info">
        <h1 className="v-info__head">{videoDetails.title}</h1>
        <hr className="v-info__divider mobile-divider" />
        <div className="v-container">
            <div className="vcontain">
                <p className="vcontain__by">By {videoDetails.channel}</p>
                <p className="vcontain__date">{dateFormat}</p>
            </div>
            <div className="vcontain">
                <p className="vcontain__views">
                    <img className="vcontain__icons" src={viewsIcon} alt="views eye icon" />
                    {videoDetails.views}
                </p>
                <p className="vcontain__likes">
                    <img className="vcontain__icons" src={likesIcon} alt="likes heart icon" />
                    {videoDetails.likes}
                </p>
            </div>
        </div>
        <hr className="v-info__divider" />
        <p className="v-info__desc"> {videoDetails.description} </p>
    </section>
  )
}

export default VideoInfo